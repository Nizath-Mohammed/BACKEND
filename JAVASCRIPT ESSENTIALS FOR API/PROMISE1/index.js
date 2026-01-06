
let promise = new Promise((resolve, reject) =>{
    resolve("Promise resolved successfully");
    reject("Promise rejected");
});

promise.finally(
    () =>
    {
    console.log("the promise is settled");})
.then(
    (resolve) => {
        return new Promise((resolve , reject) => {
            reject(new Error("Error occured in the Api"));
        });
    },

    (reject) => {
        console.error(reject);
    }
).catch(
    (error) => 
    {
    console.error("Caught in catch: " + error.message);
    return "From catch";
}
)
.then(
    (data) => 
    {
        console.log("Data: " + data);
        throw new Error("New error thrown");
    }
)
.then(
    null, 
    (error) => 
    {
    console.error("Handled in second then: " + error.message);
    throw new Error("Another error thrown");
}
)
.catch(
    (error) => {
    console.error("Caught in final catch: " + error.message);
    return "Final recovery";
}
)
.then(
    (data) => {
    console.log("Final Data: " + data);
}
);
 
console.log("End of the code");