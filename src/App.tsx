
import '@/styles/styles.css'
import VerticalContainer from './components/VerticalContainer'
import ButtonWrapper from './components/ButtonWrapper'
import ButtonVisualLayer from './components/ButtonVisualLayer'

function App() {

  const listElementStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    background: "blue",
    borderColor: "white",
    borderWidth: "2",
    borderStyle: "solid",
    color: "white",
  }

  const buttonStyle = {
    display: "flex", 
    flexDirection: "row", 
    flexBasis: "auto",
    position: "relative",

    padding: "20px"
  }

  const utilityStyle = {
    background: "green",
    position: "absolute",
    inset: 0
  }

  return (
    <>
      <VerticalContainer>
        {[1, 2, 3, 4, 5].map((n, i) => {
          return (
            <ButtonWrapper key={n}>
              <ButtonVisualLayer variant='primary'>
                Click Me!
              </ButtonVisualLayer>
            </ButtonWrapper>
          )
        })
        }

      </VerticalContainer>
    </>
  )
}

export default App
