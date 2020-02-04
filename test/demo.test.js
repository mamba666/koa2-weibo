/**
 * @description test demo
 * @author edison
 */


function sum(a,b){
    return a+b
}

test("result will be 30",()=>{
    const res=sum(10,20)
    //有了tobe肯定有not.tobe
    expect(res).toBe(30)
})