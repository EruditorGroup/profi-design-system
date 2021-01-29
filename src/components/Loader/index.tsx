import cx from "clsx";

import styles from "./Loader.module.css";

type LoaderProps = {
  variant?: "dots" | "line";
};

export default function Loader({ variant }: LoaderProps): React.ReactElement {
  return (
    <div
      title="loader"
      className={cx(styles["loader"], styles[`loader_${variant}`])}
    />
  );
}
