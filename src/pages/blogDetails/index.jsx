import Header from "../../components/Header";
import Article from "../blog/component/articles";
import Details from "./component/details";
import articleImg from "../../assets/article-img-1.png";

const BlogDetails = () => {
    return (
      <div className="text-[14px] font-[400]">
        <Header img={"hero"} />

        <Details
          heading={"Five Ways to Understand Blockchain"}
          author={"Desmond Fon Gwom"}
          publishDate={"May 20, 2023"}
          publishTime={"10:29am"}
          facebookPage={"https://www.facebook.com"}
          twitterPage={"https://www.twitter.com"}
          instagramPage={"https://www.instagram.com"}
          linkedinPage={"https://www.linkedin.com"}
          content={
            <p>
              Blockchain is a distributed ledger technology that allows for
              secure, transparent, and tamper-proof transactions. It has the
              potential to revolutionize a wide range of industries, from
              finance to healthcare to supply chain management. If you're new to
              blockchain, it can be difficult to understand. Here are five ways
              to get a better understanding of this cutting-edge technology:
              Think of a blockchain as a digital ledger. A ledger is a book or
              record that keeps track of financial transactions. A blockchain is
              a digital ledger that keeps track of transactions of any kind.
              Understand how blockchain works. Blockchain is a distributed
              ledger, which means that it is not stored on any one computer.
              Instead, it is stored on a network of computers. This makes it
              very difficult to hack or tamper with. Learn about the different
              types of blockchains. There are two main types of blockchains:
              public and private. Public blockchains, like Bitcoin, are open to
              anyone who wants to participate. Private blockchains are only
              accessible to authorized users. Explore the potential applications
              of blockchain. Blockchain has the potential to revolutionize a
              wide range of industries. Some of the potential applications of
              blockchain include: Financial services: Blockchain could be used
              to streamline and secure financial transactions. Healthcare:
              Blockchain could be used to track patient records and medical
              supplies. Supply chain management: Blockchain could be used to
              track the movement of goods and ensure their authenticity. Stay
              up-to-date on the latest developments in blockchain. Blockchain is
              a rapidly evolving technology. It is important to stay up-to-date
              on the latest developments so that you can make informed decisions
              about how to use it. If you're interested in learning more about
              blockchain, there are a number of resources available online. You
              can also find blockchain meetups and conferences in your area.
              Blockchain is a powerful technology with the potential to change
              the world. By understanding blockchain, you can be a part of this
              revolution.
            </p>
          }
        />

        <div className="mx-[30px] mb-[75px] grid place-items-center">
          <h2 className="text-[16px] font-[700] text-twitterBlue mb-[45px] place-self-start">
            You Might like:
          </h2>

          {/* recommended articles */}
          <div  className="grid gap-[60px] grid-cols-3  place-items-center">
            <Article
              heading={"Five ways to Understand Blockchain"}
              description={
                "Pam of a Hub, jos Speaks on the impact of the ISN on the who tech ecosystem in Nigeria"
              }
              image={articleImg}
            />

            <Article
              heading={"Five ways to Understand Blockchain"}
              description={
                "Pam of a Hub, jos Speaks on the impact of the ISN on the who tech ecosystem in Nigeria"
              }
              image={articleImg}
            />

            <Article
              heading={"Five ways to Understand Blockchain"}
              description={
                "Pam of a Hub, jos Speaks on the impact of the ISN on the who tech ecosystem in Nigeria"
              }
              image={articleImg}
            />
          </div>
        </div>
      </div>
    );
}
 
export default BlogDetails;