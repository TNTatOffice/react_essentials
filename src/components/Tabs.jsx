export default function Tabs({ children, buttons, ButtonsContainer }) {
    // Adding a const to allow the type of buttons we want- ButtonsContainer- menu / list / etc.
    // The const ButtonsContainer takes the value of ButtonsContainer which passes as a prop from Examples.jsx
    return (<>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>
    );
}