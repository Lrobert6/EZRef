import '../App.css';

const Button = ({text, style, onClick, type="button"}) => {
    return(
        <button type={type} style={style} className='button' onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;