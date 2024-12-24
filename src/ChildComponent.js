const ChildComponent = ({ userData }) => {

    return (
        <div>
            <h1>Child Component</h1>
            <p>Welcome {userData.name}</p>
            <p>Your age is {userData.age}</p>
            <p>Your occupation is {userData.occupation}</p>

        </div>
    );
};

export default ChildComponent;