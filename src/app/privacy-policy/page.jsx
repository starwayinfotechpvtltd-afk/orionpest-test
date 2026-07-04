"use client";

import React from "react";
import {
  Shield,
  Eye,
  Cookie,
  Link,
  Mail,
  UserCheck,
  Database,
  Lock,
  Share2,
  FileText,
  Calendar,
  Globe,
  Smartphone,
  Send,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white text-slate-800 w-full">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700/30 to-indigo-500/30"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>Your Privacy Matters</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            How we collect, use, protect, and manage your personal information
          </p>
          <p className="text-slate-400 mt-4">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Trust Badges */}
        

        {/* Introduction Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <FileText className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">Introduction</h2>
          </div>
          <div className="pl-10 space-y-3 text-slate-600 leading-relaxed">
            <p>
              This privacy notice for Orion Pest Solutions Pvt Ltd. (“Company,”
              “we,” “us,” or “our “), describes how and why we might collect,
              store, use, and/or share (“process“) your information when you use
              our services (“Services“), such as when you:
            </p>
            <ul>
              <li>
                Visit our website at https://www.orionpest.com, or any website
                of ours that links to this privacy notice.
              </li>
              <li>
                Engage with us in other related ways, including any sales,
                marketing, or events.
              </li>
            </ul>
            <p>
              <strong>Questions or concerns?</strong> Reading this privacy
              notice will help you understand your privacy rights and choices.
              If you do not agree with our policies and practices, please do not
              use our Services. If you still have any questions or concerns,
              please contact us at sales@orionpest.com
            </p>
          </div>
        </section>

        {/* Key points */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <FileText className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">SUMMARY OF KEY POINTS</h2>
          </div>
          <div className="pl-10 space-y-5 text-slate-600 leading-relaxed">
            <p className="font-bold">
              This summary provides key points from our privacy notice, but you
              can find out more details about any of these topics by clicking
              the link following each key point or by using our table of
              contents below to find the section you are looking for. You can
              also click here to go directly to our table of contents.
            </p>
            <p>
              <b>What personal information do we process?</b> When you visit,
              use, or navigate our Services, we may process personal information
              depending on how you interact with Orion Pest Solutions Pvt. Ltd.
              and the Services, the choices you make, and the products and
              features you use. Click here to learn more.
            </p>
            <p>
              <b>Do we process any sensitive personal information?</b> We do not
              process sensitive personal information.
            </p>
            <p>
              <b>Do we receive any information from third parties?</b> We do not
              receive any information from third parties.
            </p>
            <p>
              <b>How do we process your information?</b> We process your
              information to provide, improve, and administer our Services,
              communicate with you, for security and fraud prevention, and to
              comply with law. We may also process your information for other
              purposes with your consent. We process your information only when
              we have a valid legal reason to do so. Click here to learn more.
            </p>
            <p>
              <b>
                In what situations and with which parties do we share personal
                information?
              </b>{" "}
              We may share information in specific situations and with specific
              third parties. Click here to learn more.
            </p>
            <p>
              <b>How do we keep your information safe?</b> We have
              organizational and technical processes and procedures in place to
              protect your personal information. However, no electronic
              transmission over the internet or information storage technology
              can be guaranteed to be 100% secure, so we cannot promise or
              guarantee that hackers, cybercriminals, or other unauthorized
              third parties will not be able to defeat our security and
              improperly collect, access, steal, or modify your information.
            </p>
            <p>
              <b>What are your rights?</b> Depending on where you are located
              geographically, the applicable privacy law may mean you have
              certain rights regarding your personal information. Click here to
              learn more.
            </p>
            <p>
              <b>How do you exercise your rights?</b> The easiest way to
              exercise your rights is by filling out our data subject request
              form available here, or by contacting us. We will consider and act
              upon any request in accordance with applicable data protection
              laws.
            </p>
            <p>
              Want to learn more about what Orion Pest Solutions Pvt. Ltd. does
              with any information we collect? Click here to review the notice
              in full.
            </p>
          </div>
        </section>

        {/* Table of contents */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <FileText className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">TABLE OF CONTENTS</h2>
          </div>
          <div className="pl-10 space-y-3 text-slate-600 leading-relaxed">
            <ol>
              <li>WHAT INFORMATION DO WE COLLECT?</li>
              <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
              <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
              <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
              <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
              <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
              <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
              <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
              <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
              <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
              <li>
                HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
                YOU?
              </li>
            </ol>
          </div>
        </section>

        {/* Information We Collect */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Database className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">
              1. WHAT INFORMATION DO WE COLLECT?
            </h2>
          </div>
          <div className="pl-10">
            <p className="text-slate-600 mb-4 font-bold">
              Personal information you disclose to us
            </p>

            <div className="space-y-4">
              {/* <h3 className="font-semibold text-indigo-700 mb-2 flex items-center gap-2">
                  <UserCheck className="w-4 h-4" />
                  Personal Identification Information
                </h3> */}
              <p>
                {" "}
                <b>In Short:</b> We collect personal information that you
                provide to us.
              </p>
              <p>
                We collect personal information that you voluntarily provide to
                us when you express an interest in obtaining information about
                us or our products and Services, when you participate in
                activities on the Services, or otherwise when you contact us.
              </p>
              <p>
                {" "}
                <b>Personal Information Provided by You.</b> The personal
                information that we collect depends on the context of your
                interactions with us and the Services, the choices you make, and
                the products and features you use. The personal information we
                collect may include the following:
              </p>
              <ul className="list-disc ml-5 space-y-1 text-lg">
                <li>names</li>
                <li>phone numbers</li>
                <li>email addresses</li>
                <li>mailing addresses</li>
              </ul>

              {/* <h3 className="font-semibold text-indigo-700 mb-2 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Technical & Usage Data
                </h3> */}
              <p>
                {" "}
                <b>Sensitive Information.</b> We do not process sensitive
                information.
              </p>
              <p>
                All personal information that you provide to us must be true,
                complete, and accurate, and you must notify us of any changes to
                such personal information.
              </p>
              <p className="font-bold">Information automatically collected.</p>
              <p>
                {" "}
                <b>In Short:</b> Some information — such as your Internet
                Protocol (IP) address and/or browser and device characteristics
                — is collected automatically when you visit our Services.
              </p>
              <p>
                We automatically collect certain information when you visit,
                use, or navigate the Services. This information does not reveal
                your specific identity (like your name or contact information)
                but may include device and usage information, such as your IP
                address, browser and device characteristics, operating system,
                language preferences, referring URLs, device name, country,
                location, information about how and when you use our Services,
                and other technical information. This information is primarily
                needed to maintain the security and operation of our Services,
                and for our internal analytics and reporting purposes.
              </p>
            </div>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="mb-12">
          
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Eye className="w-5 h-5 text-indigo-700" />
              </div>
              <h2 className="text-2xl font-bold">
                2. HOW DO WE PROCESS YOUR INFORMATION?
              </h2>
            </div>
            <div className="space-y-2 pl-10">
            <p>
              {" "}
              <b>In Short:</b> We process your information to provide, improve,
              and administer our Services, communicate with you, for security
              and fraud prevention, and to comply with law. We may also process
              your information for other purposes with your consent.
            </p>
            <p className="font-bold">
              We process your personal information for a variety of reasons,
              depending on how you interact with our Services, including:
            </p>
            <p>
              {" "}
              <b>To post testimonials.</b> We post testimonials on our Services
              that may contain personal information.
            </p>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Lock className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">
              3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </h2>
          </div>
          <div className="pl-10 space-y-3 text-slate-600">
            <p>
              <b>In Short:</b> We may share information in specific situations
              described in this section and/or with the following third parties.
            </p>
            <p>
              We may need to share your personal information in the following
              situations:
            </p>
            <ul className="list-disc">
              <li>
                {" "}
                <b>Business Transfers.</b> We may share or transfer your
                information in connection with, or during negotiations of, any
                merger, sale of company assets, financing, or acquisition of all
                or a portion of our business to another company.
              </li>
            </ul>
          </div>
        </section>

        {/* Cookies Policy */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Cookie className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">
              4. HOW LONG DO WE KEEP YOUR INFORMATION?
            </h2>
          </div>
          <div className="pl-10 space-y-3 text-slate-600">
            <p>
              <b>In Short:</b> We keep your information for as long as necessary to fulfil the purposes outlined in this privacy notice unless otherwise required by law.
            </p>
            <p>
              We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
            </p>
            <p>
              When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
            </p>
          </div>
        </section>

        {/* Third-Party Sharing */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Share2 className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">
              5. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </h2>
          </div>
          <div className="pl-10 space-y-3 text-slate-600">
            <p>
              <b>In Short:</b> We aim to protect your personal information through a system of organizational and technical security measures.
            </p>
            <p>We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>
          </div>
        </section>

        {/* External Links */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Link className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">
              6. DO WE COLLECT INFORMATION FROM MINORS?
            </h2>
          </div>
          <div className="pl-10">
            <p className="text-slate-600">
              <b>In Short:</b> We do not knowingly collect data from or market to children under 18 years of age.
            </p>
            <p>We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data, we may have collected from children under age 18, please contact us at sales@orionpest.com</p>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <UserCheck className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">7. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
          </div>
          <div className="pl-10 space-y-3 text-slate-600">
            <p>
              <b>In Short:</b>  You may review, change, or terminate your account at any time.
            </p>
            <p><b>Withdrawing your consent:</b> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section “HOW CAN YOU CONTACT US ABOUT THIS NOTICE?” below.</p>
            <p>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
            <p><b>Opting out of marketing and promotional communications:</b> You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, replying “STOP” or “UNSUBSCRIBE” to the SMS messages that we send, or by contacting us using the details provided in the section “HOW CAN YOU CONTACT US ABOUT THIS NOTICE?” below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.</p>
            <p>If you have questions or comments about your privacy rights, you may email us at sales@orionpest.com</p>
          </div>
        </section>

        {/* Data Retention */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Calendar className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">8. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
          </div>
          <div className="pl-10">
            <p className="text-slate-600">
              Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
            </p>
          </div>
        </section>

        {/* Children's Privacy */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Smartphone className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">DO WE MAKE UPDATES TO THIS NOTICE?</h2>
          </div>
          <div className="pl-10">
            <p className="text-slate-600">
              <b>In Short:</b> Yes, we will update this notice as necessary to stay compliant with relevant laws.
            </p>
            <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>
          </div>
        </section>

        {/* Policy Updates */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <FileText className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">
              10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </h2>
          </div>
          <div className="pl-10">
            <p className="text-slate-600">
              If you have questions or comments about this notice, you may email us at sales@orionpest.com or by post to:
            </p>
            <p className="text-slate-600 mt-3">
              Orion Pest Solutions Pvt Ltd.
            </p>
            <p>Orion Pest Solutions Pvt Ltd.</p>
            <p>200W S.P. Mukherjee Road, Kolkata – 700026, West Bengal, India</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Mail className="w-5 h-5 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold">11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
          </div>
          <div className="pl-10">
            <p className="text-slate-600 mb-4">
              Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please submit a request form by clicking here.
            </p>

            {/* <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <p className="font-semibold text-indigo-800">
                    Starway Web Digital
                  </p>
                  <p className="text-sm text-slate-500 mt-2">
                    📍 59/c, Tiljara road, JBS, Gobra, <br />
                    Kolkata, West Bengal, 700046
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-sm">
                    <strong>📧 Email:</strong>{" "}
                    <a
                      href="mailto:info@starwaywebdigital.com"
                      className="text-indigo-600 hover:underline"
                    >
                      info@starwaywebdigital.com
                    </a>
                  </p>
                  <p className="text-sm mt-2">
                    <strong>📞 Phone:</strong>{" "}
                    <a
                      href="tel:+918240669415"
                      className="text-indigo-600 hover:underline"
                    >
                      +91 8240669415
                    </a>
                  </p>
                  <p className="text-sm mt-2">
                    <strong>⏰ Response Time:</strong> 2-3 business days
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}
