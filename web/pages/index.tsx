interface HomeProps {
  count: number;
}

export default function Home({ count }: HomeProps) {

  return (
    <>
      <h1>Contagem: {count}</h1>
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch('http://127.0.0.1:3333/pools/count')
  const data = await response.json()

  return {
    props: {
      count: data.count
    }
  }
}