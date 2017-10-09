function msgAfterTimeout(msg, who, timeout){
    return new Promise((resolve, reject) =>{
        setTimeout(
            () => resolve(`${msg} Hello ${who}`),timeout
        )
    })
}

msgAfterTimeout("", "Foo", 100)
.then(())
.then()