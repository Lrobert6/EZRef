import '../App.css';

const Button = ({text, style, onClick}) => {
    return(
        <div style={style} className='button' onClick={onClick}>
            {text}
        </div>
    )
}

export default Button;