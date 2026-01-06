async function sampleFunction() {
    try{

        let response = await new Promise((resolve,reject)=>{
            resolve("Promise resolved successfully");
        });

        console.log(response);

        throw new Error("Error occured in the Api");
    }
    catch(error){
        console.error("Caught in catch: " + error.message);

        console.log("From catch");

        try{
            console.log("Data: From inner try");

            throw new Error("New error thrown");
        }
        catch(innerError){
            console.error("Handled in inner catch: " + innerError.message);

            try{

                let innerResponse = await new Promise((resolve,reject) => {
                    reject(new Error("Another error thrown"));
                })
            }
            catch(finalError){
                console.error("Caught in final catch: " + finalError.message);

                console.log("Final recovery");      
        }
    }
}
    }
console.log("End of the code");
sampleFunction();
console.log("Function invoked");