import { Collapse } from "antd";
import Image from "next/image";
import styles from "./page.module.css";
import button from "./css/button.module.css";
import VideoPlay from "@/images/videoplay.jpg";
import LogosImg from "@/images/logos.png";
import FinallyImg from "@/images/wavesx2braix.webp";
import GeniusSciencyImg from "@/images/thx13vesz22.webp";
import TeslaImg from "@/images/thx13vesz22323.webp";
import EdisonImg from "@/images/thx13vesz22323ed.webp";

export default function Home() {
  return (
    <>
      <div className={styles.tophead}>
        <p>Secure and reliable website</p>
      </div>
      <header className={styles.header}>
        <p className={styles.headline}>{`From NASA to Your Brain:`}</p>
        <p className={styles.headline}>
          <span>{`The Method That `}</span>
        </p>
        <div className={`${styles.emphasis} ${styles.bgred}`}>
          <p className={styles.headline}>
            <span>{`Unlocks Genius Powers`}</span>
          </p>
        </div>
        <div className={`${styles.container} ${styles.contentvideoimg}`}>
          <div className={styles.videoImg}>
            <div className={styles.imageContainer}>
              <a href="https://bit.ly/you-are-genius">
                <Image
                  src={VideoPlay}
                  alt="Vídeo play image"
                  layout="fill"
                  className={styles.imageNext}
                />
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.colleges}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <p>{`Scientific References and Spiritual Studies:`}</p>
            <Image
              src={LogosImg}
              alt="Colleges logo image"
              layout="fill"
              className={styles.imageNext}
            />
          </div>
        </div>
      </section>

      <section className={styles.pdsection}>
        <div className={styles.container}>
          <div className={styles.textContent}>
            <p className={styles.tcenter}>
              Within each of us lies a{" "}
              <strong className={styles.destakText}>
                universe of unexplored potential
              </strong>
              , a cosmos of capabilities waiting to be awakened. Often, we
              imagine that accessing this extraordinary potential is beyond our
              reach, hidden behind complex barriers of education, opportunity,
              or even destiny. However, the truth is{" "}
              <strong className={styles.destakText}>
                surprisingly more accessible
              </strong>
              . The key to unlocking this internal treasure does not lie in
              years of rigorous study or in pursuit of mystical revelations; it
              resides{" "}
              <strong className={styles.destakText}>
                within our own biology
              </strong>
              , waiting only for the{" "}
              <strong className={styles.destakText}>
                right moment to be activated
              </strong>
              .
            </p>
          </div>
        </div>
      </section>

      <div className={button.button}>
        <a target="_blank" href="https://bit.ly/you-are-genius">
          Click Here To Watch The Video
        </a>
      </div>

      <section className={styles.pdsection}>
        <div className={styles.container}>
          <div className={styles.textContent}>
            <p className={styles.tcenter}>
              Imagine if there were a{" "}
              <strong className={styles.destakText}>
                brainwave, a specific frequency
              </strong>
              , that once tuned, could{" "}
              <strong className={styles.destakText}>
                completely transform
              </strong>{" "}
              the way we think, learn, and create. This brainwave is not a
              product of science fiction, but a{" "}
              <strong className={styles.destakText}>
                reality studied by NASA scientists
              </strong>
              , revealing a pathway to almost{" "}
              <strong className={styles.destakText}>
                genius-level abilities
              </strong>
              . This wave, dormant within each of us, could be the key to{" "}
              <strong className={styles.destakText}>
                profound transformation
              </strong>
              , unlocking a level of intelligence and creativity that many
              believe is reserved only for the geniuses among us. And the most
              extraordinary part? Activating this brainwave is{" "}
              <strong className={styles.destakText}>
                simpler and more accessible
              </strong>{" "}
              than you might imagine.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.pdsection} ${styles.benefits}`}>
        <div className={styles.container}>
          <div>
            <div className={`${styles.emphasis} ${styles.bgred}`}>
              <p className={styles.headline}>
                <span>{`Proven real`}</span>
              </p>
            </div>
            <p className={styles.headline}>
              <span>{`benefits`}</span>
            </p>
          </div>
          <ul>
            <li>
              <p>
                <strong>It works:</strong>
              </p>
              <p>
                Find out why 19,389 mothers, fathers, grandparents and students
                say it begins working the first time you try it..
              </p>
            </li>
            <li>
              <p>
                <strong>Increased Creativity:</strong>
              </p>
              <p>
                Unleash an uninterrupted flow of ideas and innovative solutions.
                Imagine having the ability to think outside the box in any
                situation, turning challenges into opportunities.
              </p>
            </li>
            <li>
              <p>
                <strong>Accelerated Learning:</strong>
              </p>
              <p>
                Absorb knowledge at an impressive speed. Whether learning a new
                language, mastering a musical instrument, or acquiring a new
                skill, the effectiveness of your learning process will be
                multiplied.
              </p>
            </li>
            <li>
              <p>
                <strong>Better Memory:</strong>
              </p>
              <p>
                Strengthen your ability to retain information. From everyday
                reminders to complex knowledge, your memory will become your
                most powerful ally.
              </p>
            </li>
            <li>
              <p>
                <strong>Overall Well-Being:</strong>
              </p>
              <p style={{ border: "none" }}>
                In addition to cognitive benefits, experience a notable increase
                in your mental and physical health. Feel more energized,
                focused, and balanced in your daily life.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.pdsection}>
        <div className={styles.container}>
          <p className={styles.headline} style={{ color: "#000000" }}>
            <span>{`Finally, The Simple Brain Wave For Genius Brain Power..`}</span>
          </p>

          <div className={styles.finally}>
            <div className={`${styles.textContent} ${styles.finallytext1}`}>
              <p>
                <strong>{`Have you ever wondered why so many billionaires say they wake up at exactly 4AM, and not at a different hour?`}</strong>
              </p>
            </div>
            <div className={`${styles.textContent} ${styles.finallytext2}`}>
              <p>
                {`Well, these billionaires know how their brain works. They’re taking advantage of the Theta brainwave, which is elevated when you wake up at that time. It makes deep and profound learning very easy, where you don’t have to work nearly as hard.`}
              </p>
            </div>
            <div className={styles.finallyimg}>
              <div className={styles.imageContainer}>
                <Image
                  src={FinallyImg}
                  alt="Finally theta wave image"
                  layout="fill"
                  className={styles.imageNext}
                />
              </div>
            </div>
          </div>
          <div className={styles.thetawave}>
            <p>
              The Theta Wave is so transformative that in the lab, my colleagues
              and I refer to it as <span>The Genius Wave</span>.
            </p>
          </div>
          <div className={styles.textContent}>
            <p style={{ color: "#203d91" }}>
              {`There’s even research from Columbia University showing your Theta could influence another person. This could mean that if you have more Theta, you could bless your kids with it and pass it down to them.`}
            </p>
          </div>
        </div>
      </section>

      <div className={button.button} style={{ marginTop: 0 }}>
        <a target="_blank" href="https://bit.ly/you-are-genius">
          Click Here To Watch The Video
        </a>
      </div>

      <section className={styles.geniussec}>
        <div className={styles.container}>
          <p className={styles.titlegeniussec}>
            The Geniuses Meets The Genius Wave...
          </p>
          <p className={styles.textgeniussec}>
            When my colleagues and I began researching how to activate the
            Genius Wave, we wanted something that was simple, easy and that you
            could do at-home..
          </p>
          <p className={styles.textgeniussec}>
            And we knew the solution would be unique, because this hasn’t
            existed until now..
          </p>
          <div className={styles.textdestakgeniussec}>
            <p>
              And there were thousands of studies, not to mention ancient texts
              that have been around for centuries to go through..
            </p>
            <div className={`${styles.imggeniussec} ${styles.imggeniussecsci}`}>
              <div
                className={`${styles.imageContainer} ${styles.imagedestakcontainer}`}
              >
                <Image
                  src={GeniusSciencyImg}
                  alt="Genius Sciency image"
                  layout="fill"
                  className={styles.imageNext}
                />
              </div>
            </div>
          </div>
          <div>
            <div className={styles.imggeniussectesla}>
              <div className={styles.imageContainer}>
                <Image
                  src={TeslaImg}
                  alt="Nikola Tesla image"
                  layout="fill"
                  className={styles.imageNext}
                />
              </div>
            </div>
            <p className={styles.textthegenius}>So let me give you a clue:</p>
            <p className={`${styles.textthegenius} ${styles.textthegenius2}`}>
              <strong>Nikola Tesla</strong> advised, If you want to find the
              secrets of the universe, think in terms of frequency and
              vibration..
            </p>
          </div>
          <div className={styles.secondgenius}>
            <div className={styles.imggeniussectesla}>
              <div className={styles.imageContainer}>
                <Image
                  src={EdisonImg}
                  alt="Thomas Edison image"
                  layout="fill"
                  className={styles.imageNext}
                />
              </div>
            </div>
            <p className={styles.textthegenius} style={{ marginTop: 0 }}>
              <strong>Thomas Edison</strong> invented a complicated contraption
              that activated Theta for him.
            </p>
            <p className={`${styles.textthegenius} ${styles.textthegenius2}`}>
              He wrote that this device solved his hardest problems for him.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.pdsection}>
        <div className={styles.container} style={{ textAlign: "left" }}>
          <p
            className={styles.headline}
            style={{ color: "#000000", marginBottom: 30 }}
          >
            <span>{`Frequently Asked Questions About`}</span>
          </p>

          <Collapse
            className={styles.collapse}
            size="large"
            items={[
              {
                headerClass: "headerrrr",
                key: "1",
                label: (
                  <div className={styles.textContent} style={{ margin: 0 }}>
                    <p>{`What is Genius Waves?`}</p>
                  </div>
                ),
                children: (
                  <div className={styles.textContent} style={{ margin: 0 }}>
                    <p>{`Genius Waves is a revolutionary method based on years of research, including studies from NASA, which uses specific sound waves to activate a brainwave linked to increased brain power, creativity, and overall well-being.`}</p>
                  </div>
                ),
              },
              {
                key: "2",
                label: (
                  <div className={styles.textContent} style={{ margin: 0 }}>
                    <p>{`How does Genius Waves work?`}</p>
                  </div>
                ),
                children: (
                  <div className={styles.textContent} style={{ margin: 0 }}>
                    <p>{`Through a daily routine of 7 seconds, Genius Waves stimulates your brain to produce and tune into a specific brainwave that is crucial for unlocking your cognitive and creative potential.`}</p>
                  </div>
                ),
              },
              {
                key: "3",
                label: (
                  <div className={styles.textContent} style={{ margin: 0 }}>
                    <p>{`Is any special equipment required?`}</p>
                  </div>
                ),
                children: (
                  <div className={styles.textContent} style={{ margin: 0 }}>
                    <p>{`No. You can access Genius Waves with any device capable of playing audio, such as a smartphone, tablet, or computer.`}</p>
                  </div>
                ),
              },
              {
                key: "4",
                label: (
                  <div className={styles.textContent} style={{ margin: 0 }}>
                    <p>{`Are there any side effects?`}</p>
                  </div>
                ),
                children: (
                  <div className={styles.textContent} style={{ margin: 0 }}>
                    <p>{`No. Genius Waves is based on solid science and is completely safe to use. No negative side effects have been reported.`}</p>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>

      <div className={button.button} style={{ marginTop: 0 }}>
        <a target="_blank" href="https://bit.ly/youre-now-genius">
          See More About Genius Waves
        </a>
      </div>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>
            Please note that the information we provide is not intended to
            replace consultation with a qualified medical professional. We
            encourage you to inform your physician of changes you make to your
            lifestyle and discuss these with him or her. For questions or
            concerns about any medical conditions you may have, please contact
            your doctor. Statements on this website have not been evaluated by
            the Food and Drug Administration. Products are not intended to
            diagnose, treat, cure or prevent any disease. If you are pregnant,
            nursing, taking medication, or have a medical condition, consult
            your physician before using our products. The website’s content and
            the product for sale is based upon the author’s opinion and is
            provided solely on an “AS IS” and “AS AVAILABLE” basis. You should
            do your own research and confirm the information with other sources
            when searching for information regarding health issues and always
            review the information carefully with your professional health care
            provider before using any of the protocols presented on this website
            and/or in the product sold here.
          </p>
          <p>
            ClickBank is the retailer of products on this site. CLICKBANK® is a
            registered trademark of Click Sales, Inc., a Delaware corporation
            located at 1444 South Entertainment Ave, Suite 410, Boise, Idaho,
            83709, USA and used by permission. ClickBank’s role as retailer does
            not constitute an endorsement, approval or review of these products
            or any claim, statement or opinion used in promotion of these
            products. *For international shipping (outside of the United
            States), shipping fees will apply.
          </p>
          <p style={{ marginTop: 15 }}>
            This site is not a part of the Facebook website or Facebook Inc.
            Additionally, This site is NOT endorsed by Facebook in any way.
            FACEBOOK is a trademark of FACEBOOK, Inc
          </p>
          <hr />
          <p className={styles.copyright}>
            © Copyright 2024 All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
