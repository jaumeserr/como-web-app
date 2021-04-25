import Footer from "../Footer"
import Header from "../Header"

// const ContentStyled = styled.main`
//   height: calc(100vh - 129px);
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
//   max-width: 1200px;
//   margin: 0 auto;
// `

const MainLayout = ({ children, userData }) => {
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