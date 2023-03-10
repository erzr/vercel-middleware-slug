import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link'

type SlugProps = {
  ts: number;
}

const SlugPage: NextPage<SlugProps> = ({
  ts,
}) => {
  return (
    <>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/test">
            Test
          </Link>
        </li>
      </ul>

      <div>
        {ts}
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      '/',
      '/test',
    ],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<SlugProps> = async () => {
  return {
    props: {
      ts: Date.now(),
    },
  }
}

export default SlugPage;