const PIECES ={ EMPTY : 0 , whtPawn : 1 , whtKnight : 2, whtBishop : 3, whtRook : 4, whtQueen : 5, whtKing : 6,
				blkPawn : 7, blkKnight : 8, blkBishop : 9, blkRook : 10, blkQueen : 11, blkKing : 12 };

const BOARD_SQ_NUM = 120;

const COLORS = { WHITE: 0, BLACK: 1, BOTH: 2,}

const FILES =  { FILE_A:0, FILE_B:1, FILE_C:2, FILE_D:3, 
	FILE_E:4, FILE_F:5, FILE_G:6, FILE_H:7, FILE_NONE:8 };
	
const RANKS =  { RANK_1:0, RANK_2:1, RANK_3:2, RANK_4:3, 
	RANK_5:4, RANK_6:5, RANK_7:6, RANK_8:7, RANK_NONE:8 };

const SQUARES = {
  A1:21, B1:22, C1:23, D1:24, E1:25, F1:26, G1:27, H1:28,  
  A8:91, B8:92, C8:93, D8:94, E8:95, F8:96, G8:97, H8:98, 
  NO_SQ:99, OFFBOARD:100
};

const BOOL = { FALSE:0, TRUE:1 };

let FilesBoard = new Array(BOARD_SQ_NUM);
let RanksBoard = new Array(BOARD_SQ_NUM);

function FR