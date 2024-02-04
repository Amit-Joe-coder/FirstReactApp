function formatName(user){
    return user.firstName+ user.lastName;
}
const user = {
 firstName:'Amit',
 lastName:'Joe'

};

const element = (
    <>
    <h1>I'm {formatName(user)}</h1>
    <p>
        I have done graduation in 19 and doing freelancing till now,
        I writing this to get job as <strong>frontend developer</strong> which is full time.

    </p>
    <h2>skills and languages</h2>
    <ul>
        <li>C in my graduation</li>
        <li>Python</li>
        <li>JavaScript</li>
    </ul>
    </>
);

ReactDOM.render(
    element,
    document.getElementById('root')
)