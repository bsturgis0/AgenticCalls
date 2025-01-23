export default function SecurityPage() {
    return (
      <main className="pt-24 pb-16 bg-black">
        <div className="container px-4 mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Security
          </h1>
  
          <div className="prose prose-invert max-w-none prose-headings:text-cyan-500">
            <p className="text-gray-400 text-lg mb-8">
              Our commitment to protecting your data and ensuring secure communications
            </p>
  
            <section className="mb-12">
              <h2>Data Protection</h2>
              <p>We implement multiple layers of security measures to protect your data:</p>
              <ul>
                <li>End-to-end encryption for all voice communications</li>
                <li>Regular security audits and penetration testing</li>
                <li>Secure data centers with 24/7 monitoring</li>
                <li>Regular backup procedures and disaster recovery planning</li>
              </ul>
            </section>
  
            <section className="mb-12">
              <h2>Infrastructure Security</h2>
              <p>Our infrastructure is built on enterprise-grade security standards:</p>
              <ul>
                <li>SOC 2 Type II certified data centers</li>
                <li>Regular vulnerability assessments</li>
                <li>Intrusion detection and prevention systems</li>
                <li>DDoS protection</li>
              </ul>
            </section>
  
            <section className="mb-12">
              <h2>Access Control</h2>
              <p>We maintain strict access controls:</p>
              <ul>
                <li>Multi-factor authentication</li>
                <li>Role-based access control (RBAC)</li>
                <li>Regular access reviews</li>
                <li>Audit logging and monitoring</li>
              </ul>
            </section>
  
            <section className="mb-12">
              <h2>Compliance</h2>
              <p>We adhere to international security standards and regulations:</p>
              <ul>
                <li>GDPR compliance</li>
                <li>HIPAA compliance</li>
                <li>PCI DSS compliance</li>
                <li>ISO 27001 certification</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    )
  }
  
  