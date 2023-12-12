export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
    // Adding a const to allow the type of buttons we want- ButtonsContainer- menu / list / etc.
    // The const ButtonsContainer takes the value of ButtonsContainer which passes as a prop from Examples.jsx
    // The default is set to 'menu'
    return (<>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>
    );
}