import '../App.css';

const Button = ({text, style, onClick, type="button"}) => {
    return(
        <div type={type} style={style} className='button' onClick={onClick}>
            {text}
        </div>
    )
}

export default Button;