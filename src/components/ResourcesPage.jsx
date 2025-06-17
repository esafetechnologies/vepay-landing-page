import './ResourcesPage.css';

const ResourcesPage = () => {
  return (
    <div className="resources-page">
      <iframe 
        src="https://insights.vepay.io" 
        style={{ width: '100%', height: '100vh', border: 'none' }}
      />
    </div>
  );
};

export default ResourcesPage;