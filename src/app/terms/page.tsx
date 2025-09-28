import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight mb-6">Terms of Service</h1>
        <div className="prose prose-lg text-muted-foreground">
          <h2 className="text-2xl font-bold">1. Terms</h2>
          <p>
            By accessing the website at{' '}
            <Link href="/">https://dorksmith.com</Link>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
          </p>
          <h2 className="text-2xl font-bold mt-6">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on Dorksmith's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ol className="list-decimal pl-6">
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on Dorksmith's website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ol>
          <p>
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by Dorksmith at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
          </p>
          <h2 className="text-2xl font-bold mt-6">3. Disclaimer</h2>
          <p>
            The materials on Dorksmith's website are provided on an 'as is' basis. Dorksmith makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p>
            Further, Dorksmith does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site. Dorksmith is a tool for educational and research purposes. Any use of this tool for illegal activities is strictly prohibited. Users are responsible for their own actions and must comply with all applicable laws.
          </p>
          <h2 className="text-2xl font-bold mt-6">4. Limitations</h2>
          <p>
            In no event shall Dorksmith or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Dorksmith's website, even if Dorksmith or a Dorksmith authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
          <h2 className="text-2xl font-bold mt-6">5. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the land and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </div>
        <div className="mt-8">
          <Link href="/" className="text-primary hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
