import './Page.css';

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const button_yes_click = () => {
    alert("Одобряю!!!)")
  }
  
const button_no_mouse_over = () => {
    const button_no = document.getElementsByClassName("window__button-no")[0];
    button_no.style.left = getRandomInt(0, 25) + "rem";
    button_no.style.top = getRandomInt(0, 18) + "rem";
  }

export const Page = () => <div className="window">
    Вы согласны работать бесплатно?
    <button 
      className="window__button-yes"
      onClick={button_yes_click}>
      Да
    </button>
    <button 
      className="window__button-no"
      onMouseOver={button_no_mouse_over}>
      Нет
    </button>    
  </div>
