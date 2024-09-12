"use client";

const MarketingForm = () => {
  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      {/* Directly embed the script */}
      <script
        type="text/javascript"
        src="//marketing.k99bs.com/form/generate.js?id=1"
        async
      />
      
      {/* Iframe for the form */}
      <iframe 
        src="//marketing.k99bs.com/form/1"
        width="100%"
        height="1100"
        style={{ border: 'none', background: '#fff', margin: '0 auto', padding: '50px 0' }}
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
};

export default MarketingForm;
