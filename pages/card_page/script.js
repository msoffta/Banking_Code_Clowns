// import { getData } from '../../modules/helpers';
// import { user } from "../../modules/user";
import { makeHeader } from "../../modules/ui"

makeHeader()




let cards = document.querySelectorAll('.card');

VanillaTilt.init(cards, {
    max: 15,  // Максимальный угол поворота карточки
    glare: true,  // Включаем эффект блика
    'max-glare': 0.5,  // Регулируем интенсивность блика
});
let convert = document.querySelectorAll('.convert');

VanillaTilt.init(convert, {
    max: 5,  // Максимальный угол поворота карточки
    glare: true,  // Включаем эффект блика
    'max-glare': 0.3,  // Регулируем интенсивность блика
});



// {
//     reverse: false,  // Включает/выключает реверсию наклона
//     max:  35,  // Максимальный угол поворота карточки
//     startX:  0,  // Начальное положение по X
//     startY:  0,  // Начальное положение по Y
//     perspective:  1000,   // Перспектива (чем меньше, тем ярче эффект)
//     scale:  1,  // Масштабирование
//     speed:  300,  // Скорость анимации в начале/в конце
//     transition:  true,  // Нужна ли анимация в начале/конце
//     axis:  null,  // Отключение одной оси (X/Y)
//     reset:  true,  // Сбрасывать ли положение
//     easing:  "cubic-bezier(.03,.98,.52,.99)",  // Анимация при старте/в конце
//     glare:  false,  //Нужен ли эффект блика
//     "max-glare":  1,  // Интенсивность (непрозрачность) блика (от 0 до 1)
//     gyroscope:  true,  // Нужен ли эффект при наклоне телефона/другого устройства
//     /* Максимальные и минимальные углы эффекта при наклоне устройства */
//     gyroscopeMinAngleX:  -45,
//     gyroscopeMaxAngleX:  45,
//     gyroscopeMinAngleY:  -45, 
//     gyroscopeMaxAngleY:  45,
// }


