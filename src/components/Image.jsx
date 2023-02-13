const Image = (props) => {
  return (
    <div>
        <img src={props.image} alt={props.title} />
    </div>
  )
}
export default Image