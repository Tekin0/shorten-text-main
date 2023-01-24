function slice(){
    let size = document.getElementById('input').value

    const text = document.getElementsByClassName("text")

    for(let i = 0; i<text.length;i++){
        
        let words = text[i].dataset.text.split(" "),
            totalSize = 0,
            index = 0,
            newText="",
            temp = 0

        while(true){
            totalSize += words[index].length
            console.log(totalSize)
            if(totalSize > size){
                --index
                break
            }
            else{
                ++index
            }
        }
        while(temp < index){
            newText += words[temp]+' '
            ++temp
        }
        text[i].innerHTML = newText.trim() + '...'
    }
}