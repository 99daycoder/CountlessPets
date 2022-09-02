import './HowToCss.css';

//Placeholder component that will be changed later on the project. Right now it is holding "dummy elements" which will be removed when the project is finished
const HowToWorkTogether = () => {
  return (
    <>
      <div className="how-to-work-together">
        <h1> How To Work Together</h1>
        <p>
          Here I am teaching you how to properly use Zoom and the advantages it
          brings when using Zoom in teams. It will boost your productivity and
          allows you to meet more people online while fortering relations among
          people you've never met before.
        </p>
        <h2>How to use Zoom</h2>
        <p>
          Follow the instruction on the video to install and get started on
          Zoom:
        </p>
        <ul>
          <li>
            Go to <a href="https://zoom.us/">Zoom</a> and download the app (it
            will be useful for repeated use){' '}
          </li>
          <li>Create an account and log in</li>
          <li>
            Either create a room (if you want to link it to one of your lessons)
            or copy the link of one lesson you's like to take part in{' '}
          </li>
          <li>Join a session and enjoy the flood of knowledge</li>
        </ul>
        <h2> How to register for zoom</h2>
        <ul>
          <li>
            The first thing to do, of course, is to register for the service.
            You can do this either from your laptop or from your mobile phone.
            We’ll cover the web service first.
          </li>
          <li>
            Go to Zoom’s signup page. You might first be asked to enter your
            date of birth. That’s because if you are younger than 16, you aren’t
            eligible to make a Zoom account unless it’s for school.
          </li>
          <li>
            You’ll next be presented with a few options for creating an account.
            At the top, you can enter your email in the box labeled “Your work
            email address.” If you do this, move on to step two. Even though
            Zoom asks for a work email, a personal email should work fine. In
            March, it was reported that Zoom leaked some email addresses and
            user photos via Zoom’s Contact Directory feature because the app
            could think people with certain email domains work for the same
            company, but Zoom removed that domain-matching feature in April.
          </li>
          <li>
            You can also create an account by clicking the “Sign in with SSO,”
            “Sign in with Google,” or “Sign in with Facebook” buttons, after
            which you just download the Zoom desktop app and move on to step
            seven.
          </li>
          <li>
            If you entered an email, Zoom will send an activation email to that
            address. Click the “Activate Account” button in the email or copy
            and paste the activation URL into your browser to activate your
            account.
          </li>
          <li>
            {' '}
            On the page that opens up in your web browser, you’ll next be asked
            if you’re signing up on behalf of a school. Assuming you aren’t,
            click the “No” button and then click “Continue.”
          </li>
          <li>
            {' '}
            On the next page, fill in your first and last name and a password
          </li>
          <li>
            On the next page, you can invite other people to create a free Zoom
            account via email. You can skip this step if you want.
          </li>{' '}
          <li>
            {' '}
            Next, you’ll be given a link to your personal meeting URL and will
            have the option to click an orange “Start Meeting Now” button to
            start a test meeting. If you copy that URL into your browser or
            click that orange button, you should be prompted to download the
            Zoom desktop app.Follow the prompts to install the app.
          </li>
          <li>
            After you’ve installed the Zoom app, you’ll see buttons to “Join a
            Meeting” or “Sign In.”
          </li>{' '}
          <li>
            {' '}
            To start your test meeting, click “Sign In.” On the next screen,
            enter the email and password you just used to sign up for Zoom in
            your browser. If you registered using the “Sign in with Google” or
            “Sign in with Facebook” buttons, click those buttons here and follow
            the prompts.
          </li>
          <li>
            Once you’re logged in, make sure you’re on the “Home” tab, and then
            click the orange “New Meeting” button in the Zoom app. Your meeting
            will start.
          </li>
        </ul>
      </div>
    </>
  );
};

export default HowToWorkTogether;
