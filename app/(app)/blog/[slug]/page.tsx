
interface pageProps{
  params: {slug:string}
}
const SinglePost  = ({params}: pageProps) => {
  return (
    <div className='main-container-single-post'>
      <h1> The slug is {params.slug}</h1>
    </div>
  )
}

export default SinglePost;