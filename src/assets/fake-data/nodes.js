import cryptoLogo from '../chains/logo/crypto-org.png';
import nomicLogo from '../images/crypto/nomic/nomic-logo.svg';
import axelarLogo from '../chains/logo/axelar.png';
import evmosLogo from '../chains/logo/evmos.png';
import cerberusLogo from '../images/crypto/cerberus/website_logo.png';
import konstellationLogo from '../chains/logo/konstellation.png';
import bitsongLogo from '../chains/logo/bitsong.png';
import another1Logo from '../images/crypto/another1/another-1.svg';
import odinLogo from '../images/crypto/odin/odin_logo.jpeg';
import regenLogo from '../chains/logo/regen.png';
import comdexLogo from '../chains/logo/comdex.png';

const nodesData = [
    {
        name: "CROnquerorsNode (Partner)",
        tags: "cosmos",
        logo: cryptoLogo,
        apr: "15",
        stakeUrl: 'https://wallet.keplr.app/#/crypto-org/stake?modal=detail&validator=crocncl1s078nr9kp4ulsxgnsasnr3k6zg5q9erps348eg',
        isEnabled: true,
        price: 0,
    },
    {
        name: "EVMOs",
        tags: "cosmos",
        logo: evmosLogo,
        apr: "0",
        stakeUrl: 'https://evmos.disperze.network/validators/evmosvaloper19fv2gwkgv3x53lau3um6tzg7qxvq96grvg97zr',
        isEnabled: true,
        isTest: false,
    },
    {
        name: "Nomic",
        tags: "cosmos",
        logo: nomicLogo,
        apr: "800",
        stakeUrl: 'https://app.nomic.io/',
        isEnabled: true,
    },
    {
        name: "Konstellation",
        tags: "cosmos",
        logo: konstellationLogo,
        apr: "13.9",
        stakeUrl: 'https://wallet.konstellation.tech/staking/delegate',
        isEnabled: true,
    },
    {
        name: "Bitsong",
        tags: "cosmos",
        logo: bitsongLogo,
        apr: "36.40",
        stakeUrl: 'https://wallet.bitsong.io/#/validators/bitsongvaloper1qxw4fjged2xve8ez7nu779tm8ejw92rv0vcuqr',
        isEnabled: true,
    },
    {
        name: "Odin",
        tags: "cosmos",
        logo: odinLogo,
        apr: "?",
        stakeUrl: 'https://look.chillvalidation.com/odin/staking',
        isEnabled: true,
    },
    {
        name: "Another1",
        tags: "cosmos",
        logo: another1Logo,
        apr: "13.9",
        stakeUrl: '#',
        isEnabled: false,
        isTest: true,
    },
    {
        name: 'Cerberus',
        tags: "cosmos",
        logo: cerberusLogo,
        apr: "0",
        stakeUrl: 'https://cerberus.network/',
        isEnabled: false,
    },
    {
        name: "Axelar",
        tags: "cosmos",
        logo: axelarLogo,
        apr: "0",
        stakeUrl: '',
        isEnabled: false,
    },
    {
        name: "Regen",
        tags: "cosmos",
        logo: regenLogo,
        apr: "0",
        stakeUrl: '',
        isEnabled: false,
    },
    {
        name: "Comdex",
        tags: "cosmos",
        logo: comdexLogo,
        apr: "0",
        stakeUrl: '',
        isEnabled: false,
    },
]

export default nodesData;
