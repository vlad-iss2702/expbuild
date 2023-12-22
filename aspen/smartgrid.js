module.exports = {
	outputStyle: 'scss', /* less || scss || sass || styl */
    columns: 12, /* количество столбцов сетки */
	offset: '30px', /*отступы*/
	//mobileFirst: true,
	container: {
        maxWidth: '1270px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
	breakPoints: {
        w: {
             width: "2560px"
        },
        r: {
             width: "2000px"
        },
        m: {
            width: "1920px"
        },
        mr: {
            width: "1600px"
        },
        mmm: {
            width: "1536px"
        },
        mz: {
            width: "1440px"
        },
        mt: {
            width: "1400px"
        },
        ms: {
            width: "1367px"
        },
        mv: {
            width: "1280px"
        },
        mp: {
            width: "1200px"
        },
        mds: {
            width: "1024px"
        },
        md: {
            width: "992px"
        },
        sm: {
            width: "768px"
        },
        xs: {
            width: "576px"
        },
        xxs: {
            width: "415px"
        },
        rxs: {
            width: "412px"
        },
        txs: {
            width: "376px"
        },
        mxs: {
            width: "361px"
        },
        mmxs: {
            width: "321px",
            fields: "15px"
        }
	},
    //detailedCalc: true
};