import { m as motion } from "framer-motion";
import { ISpinnerProps } from "./spinner.types";
import SpinnerThird from "shared/components/icons/spinner-third";

const Spinner: React.FC<ISpinnerProps> = ({ size = 30, style, iconClassName }) => {
    return (
        <motion.div
            className="flex items-center justify-center overflow-hidden p-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={style}
        >
            <div className="animate-spin fill-white [animation-duration:0.5s]" data-testid="loading-icon">
                <SpinnerThird className={iconClassName} style={{ width: size }} />
            </div>
        </motion.div>
    );
};

export default Spinner;
