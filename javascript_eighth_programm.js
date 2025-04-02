import  madhu2  from "./javascript_eleventh_programm"

function that(data ,docallback , name){
     setTimeout(() => {
        console.log(data)
                  name()
        return docallback()
    } , 5000)

}

function set(){
       that(1 , () =>{
            that(2, () => {
              setTimeout(() => {
              console.log('its over')
              } , 5000)
        } , () => {setTimeout(() => {
            console.log('sasi')
        }, 6000)})
    } , () => {setTimeout(() => {
        console.log('madhu')
    }, 6000)})

}
set()

async function nam() {
    const nim = await fetch('https://www.youtube.com/watch?v=EerdGm-ehJQ&t=76828s')
    let num = nim
    return num
}
let kon = nam().then(gyh => {console.log(gyh)})
console.log(kon + ' '+ her)
madhu2()
