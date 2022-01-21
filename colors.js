function nightDayHandler(self){
    var target = document.querySelector('body');
    var aList = document.querySelectorAll('a');
    if (self.value === 'night') {
        target.style.backgroundColor = 'black';
        target.style.color = 'white';
        self.value = 'day';
        for (let i = 0; i < aList.length; i++) {
            aList[i].style.color = 'yellow';
        }
    } else {
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        self.value = 'night';
        for (let i = 0; i < aList.length; i++) {
            aList[i].style.color = 'blue';
        }
    }
}