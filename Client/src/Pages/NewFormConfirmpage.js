import FormNavBar from "../Components/Navbar/FormNavbar";
import Header from "../Components/Common/Header";
import ContactInformation from "../Components/Common/ContactInformation";
import Name from "../Components/Common/Name";
import UntitledQuestion from "../Components/Common/UntitledQuestion";
import SendViaEmail from "../Components/Common/SendViaEmail";


function NewFormConfirmpage() {
    return (
      <>
        <FormNavBar />;
        <Header />;
        <ContactInformation />;
        <Name/>;
        <UntitledQuestion />;
        <SendViaEmail/>
      </>
    );
  }
  
  export default (NewFormConfirmpage);