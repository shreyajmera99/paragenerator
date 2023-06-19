
// const input = document.getElementById("num");
// const container = document.querySelector('.container');


const gp = (n) =>{
    let text = '';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for(let i = 0;i<n;++i){
        const random = (Math.random()*25).toFixed(0)
        text += letters[random];
    }
    return text

}
// const getData = () =>{

//     const numofwords = Number(input.value)
//     const para = document.createElement('p')

//     let data = '';

//     for(let i = 0;i<numofwords;++i){
//         const generatednumber = (Math.random()*15).toFixed(0)
//         data += gp(generatednumber)
//         data += ' ';
//     }

//     para.innerText = data;

//     para.setAttribute('class','paras')

//     container.append(para)
// }

const getData = () => {
    const input = document.getElementById('num');
    const numofwords = Number(input.value);
  
    if (isNaN(numofwords) || numofwords <= 0) {
      showPopup();
      return;
    }
  
    const para = document.createElement('p');
    let data = '';
  
    for (let i = 0; i < numofwords; ++i) {
      const generatednumber = (Math.random() * 15).toFixed(0);
      data += gp(generatednumber);
      data += ' ';
    }
  
    para.innerText = data;
    para.setAttribute('class', 'paras');
  
    const container = document.querySelector('.container');
    const existingPara = document.querySelector('.paras');
  
    if (existingPara) {
      container.removeChild(existingPara);
    }
  
    container.appendChild(para);
  };
  
  const showPopup = () => {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
  };
  
  const hidePopup = () => {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
  };
  


