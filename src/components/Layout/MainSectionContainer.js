export default function MainSectionContainer({
  children,
  paddingHorizontal,
  backgroundColor,
  width,
  height,
  id,
}) {
  return (
    <div
      style={{
        paddingLeft: paddingHorizontal,
        paddingRight: paddingHorizontal,
        backgroundColor,
        width,
        height,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
      id={id}
    >
      {children}
    </div>
  );
}

MainSectionContainer.defaultProps = {
  height: "100vh",
};
