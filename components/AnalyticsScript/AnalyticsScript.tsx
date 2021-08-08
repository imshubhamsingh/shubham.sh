function AnalyticsServicesScripts() {
  return (
    <>
      <>
        <script
          type="text/javascript"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-JR8JPHR73Z`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-JR8JPHR73Z");`,
          }}
        />
      </>
    </>
  );
}

export default AnalyticsServicesScripts;
