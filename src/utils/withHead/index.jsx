import HeadLayout from "@/components/HeadLayout/HeadLayout";

export default function withHead(Component) {
  return (props) => {
    return (
      <>
        <HeadLayout pathname={props.router.pathname} />
        <Component {...props} />
      </>
    );
  };
}
