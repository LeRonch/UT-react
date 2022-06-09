import './setupTests';

test("returns undefined by default", () => {
  	const mock = jest.fn();    
  	let result = mock("foo");
    //tester que result est bien undefined
    expect(result).toBeUndefined(); 
    //tester que la fonction mock a bien été appelée
 	let new_result = mock("foo2");
    expect(new_result).toBeUndefined();
    //tester que la fonction mock a bien été appelée 2 fois
    expect(mock).toHaveBeenCalledTimes(2);
    //tester que la fonction mock a bien été appelée avec le paramètre foo2
    expect(mock).toHaveBeenCalledWith('foo2')
});

const doAdd = (a, b, callback) => {    
    let add = a + b + 3;
    callback(add);
};

test("calls callback with arguments added", () => {    

    const mockCallback = jest.fn(x => x);
    let a = 1
    let b = 2
    doAdd(a, b, mockCallback);
    // doAdd(1, 2, mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(6);

});