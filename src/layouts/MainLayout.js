import Footer from "../components/Footer"
import Header from "../components/Header"

// const ContentStyled = styled.main`
//   height: calc(100vh - 129px);
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
//   max-width: 1200px;
//   margin: 0 auto;
// `

const MainLayout = ({ children }) => {
  return(
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;