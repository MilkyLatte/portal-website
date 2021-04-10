export default function BaseText({
  fontSize,
  fontWeight,
  color,
  textAlign,
  children,
  id,
  className,
}) {
  return (
    <h3
      style={{
        fontSize,
        fontWeight,
        color,
        textAlign,
        margin: 0,
      }}
      id={id}
      className={className}
    >
      {children}
    </h3>
  );
}

BaseText.defaultProps = {
  fontSize: "32px",
  fontWeight: "400",
  color: "black",
  textAlign: "center",
};
