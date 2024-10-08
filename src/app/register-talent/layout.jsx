import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/FormStyle.css'

export default function Layout({ children }) {
    return (
        <main className="d-flex align-items-center h-100">
            <div className="container rounded shadow p-3 section-container-bg">
                <div className="row p-2 gap-2">
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
        </main>
    );
}