import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'John Doe',
            email: 'john.doe@gmail.com',
            avatarUrl: 'https://github.com/douglasdl.png',
        }
    })

    const pool = await prisma.pool.create({
        data: {
            title: 'Example Pool',
            code: 'BOL123',
            ownerId: user.id,

            participants: {
                create: {
                    userId: user.id,
                }
            }
        }
    })

    // console.log(new Date().toISOString());
    await prisma.game.create({
        data: {
            date: '2022-11-14T10:00:00.209Z',
            firstTeamCountryCode: 'DE',
            secondTeamCountryCode: 'BR'
        }
    })

    await prisma.game.create({
        data: {
            date: '2022-11-15T09:00:00.209Z',
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'JP',

            guesses: {
                create: {
                     firstTeamPoints: 4,
                     secondTeamPoints: 1,

                     participant: {
                        connect: {
                            userId_poolId: {
                                userId: user.id,
                                poolId: pool.id,
                            }
                        }
                     }
                }
            }
        }
    })
}

main()