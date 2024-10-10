import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/FormStyle.css'
import Waves from "@/components/WaveAnimation";
import Footer from "@/components/Footer/Footer";

export default function Layout({ children }) {
    return (
        <main className="" style={{ height: '100vh' }}>
            <div className="h-100 d-flex flex-column justify-content-between">
                <div className="form-overlay">
                    <Waves />
                    <div className="">
                        {children}
                    </div>
                </div>
                <ToastContainer
                    position="bottom-right" // Position toast at the bottom right
                    autoClose={5000} // Duration to show toast
                    hideProgressBar={false} // Show progress bar
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover />
                <Footer />
            </div>
        </main>
    );
}