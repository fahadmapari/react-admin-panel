import "./widget.scss";

const Widget = () => {
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">USERS</span>
            <span className="counter">21344</span>
            <span className="link">See all users</span>
        </div>
        <div className="right">right</div>
    </div>
  )
}

export default Widget