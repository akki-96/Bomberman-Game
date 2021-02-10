
const random = [];
let count = 0;
for(let i=0; i<10; i++)
{
  let temp=Math.floor(Math.random()*81)+1;  // Math.random gives the value in the range of 0 - 1 in which 0 is included while 1 is not included.
  while(random.includes(temp))  //random.includes(temp)=> The includes() method returns true if the searchString found in the random array.
  {
      temp=Math.floor(Math.random()*81)+1;
  }
  random.push(temp);
}

for(let i=1;i<=81;i++)
{
    let cell=document.createElement("div");
    cell.setAttribute("class","cell");
    cell.setAttribute("id","cell_"+i);
    cell.addEventListener("click",cellclicked);
    document.getElementById("grid").appendChild(cell);
}

function cellclicked(cell)
{
    let c=Number(cell.target.getAttribute("id").slice(5));
    let bc=bomb_clicked(c);
    if(bc)
     {
       lost();
     }
    else
     {
        count++;
        let score=document.getElementById("gameScore").innerHTML=count;
        cellColorChange(c);
     }
    if(count==71)
    {
        win();
    }
}

function bomb_clicked(num)
{
    if(random.includes(num))
    {
        return true;
    }
    else{
        return false;
    }
}

function lost(){
    removeEL();
    showBomb();
    document.getElementById("resultDisplay").innerHTML="Game Over!!!";
}

function win(){
    removeEL();
    showBomb();
    document.getElementById("resultDisplay").innerText="Win!!!";
}

function removeEL(){
    for(let i=1;i<=81;i++)
    {
        document.getElementsById("cell_"+i).removeEventListener("click",cellclicked);
    
    }
}

function showBomb()
{
    for(let i=0;i<10;i++){
         document.getElementById("cell_"+random[i]).style.backgroundImage="url(https://img.icons8.com/emoji/48/000000/bomb-emoji.png)";
         document.getElementById("cell_"+random[i]).style.backgroundSize="cover";
         document.getElementById("cell_"+random[i]).style.backgroundColor="rgb(255,0,0)";
    }
}

function cellColorChange(){
    document.getElementById("cell_"+c).style["background-color"]="rgb(66,230,26)";
    document.getElementById("cell_"+c).removeEventListener("click", cellclicked);
}

function reset(){
    resetCell();
    scoreReset();
    addListener();
    document.getElementById("resultDisplay").innerText="";
}

function resetCell()
{
    for(let i=1;i<=81;i++)
    {
        document.getElementById("cell_"+i).style.backgroundImage="";
        document.getElementById("cell_"+i).removeAttribute('style');
    }
    while(random.length>0){
        random.pop();
    }
    count=0;
    for(let i=0;i<10;i++)
    {
        let temp=Math.floor(Math.random() * 81 ) + 1;
        while(random.includes(temp))
        {
            temp=Math.floor(Math.random() * 81 ) + 1;
        }
        random.push(temp);
    }
    console.log(random);
}

function scoreReset(){
    let score=document.getElementById("gameScore").innerHTML=0;
}

function addListener(){
    for(let i=1;i<=81;i++)
    {
        let cell=document.getElementById("cell_"+i);
        cell.addEventListener("click", cellclicked);
    }
}

function generateBomb(){
    for(let i=0;i<10;i++)
    {
        let temp=Math.floor(Math.random() * 81 ) + 1;
        while(random.includes(temp))
        {
            temp=Math.floor(Math.random() * 81 ) + 1;
        }
        random.push(temp);  
    }
}
generateBomb();