const alleBigga = document.querySelectorAll('.bigga');
const rimpel = document.createElement('div');
rimpel.classList = 'rimpel';


for(let i=0; i<alleBigga.length; i++) {
  alleBigga[i].addEventListener('click', function(e){
    e.preventDefault();
    let x = parseInt(e.pageX - this.offsetLeft -50);
    let y = parseInt(e.pageY - this.offsetTop -50);
    rimpel.style.left = x +'px';
    rimpel.style.top = y +'px';
    e.target.append(rimpel);
    rimpel.classList.add('groeien')

    if (this.getElementByTagName('input')[0]) {
      let deCB = this.getElementByTagName('input')[0];
      deCB.checked = !deCB.checked;
    }

  });
}
