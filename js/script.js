window.onload = function () {


    let number=document.createElement("input");
    let buttonOk=document.createElement("button");
    buttonOk.innerHTML="ok";
    document.body.append(number)
    document.body.append(buttonOk)



    function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    buttonOk.addEventListener("click",start)
    function start()
    {
        let array=[];
        let number=document.querySelector("input").value;
        if(!isNaN(number) && number!="")
        {
            for(i=0;i<number;i++)
            {
            array[i]= randomInteger(-20,70)
            }
            
            rez(array)
        }
        else{ alert("введите нормально цифры")}
        
    }


    function rez(array)
    {
        let indexFirstOtr,indexSecondOtr;
        for(let i=0;i<array.length;i++)
        {
        if(array[i]<0)
        {
            indexFirstOtr=i;
            console.log(indexFirstOtr)
            break;
        }
        }

        for(let i=indexFirstOtr+1;i<array.length;i++)
        {
            if(array[i]<0)
        {
            indexSecondOtr=i;
            console.log(indexSecondOtr)
            break;
        }
        }





        var  sum=0;
        var min=array[indexFirstOtr];
        for(let i=indexFirstOtr;i<=indexSecondOtr;i++)
        {
            if(min>array[i])
            {
                min=array[i];
            }
            sum+=array[i];
        }
    
        let div=document.createElement("div");
        if(min==undefined)
        {
            div.innerHTML=`Наш массив ( ${array} ) самого маленького числа нет, так как нет отрицательных и их сумма 0`

        }else{
            div.innerHTML=`Наш массив ( ${array} ) и самое маленькое число ${min} и их сумма ${sum}`

        }
        document.body.append(div);
        
    }
}
