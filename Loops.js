let marks ={
    avi:90,
    Tani:85,
    Rahul:65,
    Dan:45,
    Steve:55
}

for(let i= 0 ; i< Object.keys(marks).length;i++){
    console.log("Key at posiotion :",i+1,Object.keys(marks)[i])
    console.log("Value at posiotion :",i+1,marks[Object.keys(marks)[i]])
}
