var order = prompt("what kind of animal do you want ?");
while (order != 'cat' && order != 'dog') {
    order = prompt("what do you want cat or dog ?");

    var itemorder = '';
    if (order == "cat") {
        itemorder = '<img src="/Imagae/cat.jpg"/>';

    }
    else {
        itemorder = '<img src="/Imagae/dog.jpg"/>';

    }



}

var numoforder = prompt("how many animal do you want?");
var result = '';
for (var i = 0; i < numoforder; i++) {
    // console.log(itemorder)
    result=result+itemorder;
    
}

document.write(result);