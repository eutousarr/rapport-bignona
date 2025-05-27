
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Candidat
 * 
 */
export type Candidat = $Result.DefaultSelection<Prisma.$CandidatPayload>
/**
 * Model Anonymat
 * 
 */
export type Anonymat = $Result.DefaultSelection<Prisma.$AnonymatPayload>
/**
 * Model Zone
 * 
 */
export type Zone = $Result.DefaultSelection<Prisma.$ZonePayload>
/**
 * Model Centre
 * 
 */
export type Centre = $Result.DefaultSelection<Prisma.$CentrePayload>
/**
 * Model Etablissement
 * 
 */
export type Etablissement = $Result.DefaultSelection<Prisma.$EtablissementPayload>
/**
 * Model Groupe
 * 
 */
export type Groupe = $Result.DefaultSelection<Prisma.$GroupePayload>
/**
 * Model Jury
 * 
 */
export type Jury = $Result.DefaultSelection<Prisma.$JuryPayload>
/**
 * Model Matiere
 * 
 */
export type Matiere = $Result.DefaultSelection<Prisma.$MatierePayload>
/**
 * Model Note
 * 
 */
export type Note = $Result.DefaultSelection<Prisma.$NotePayload>
/**
 * Model Resultat
 * 
 */
export type Resultat = $Result.DefaultSelection<Prisma.$ResultatPayload>
/**
 * Model Mark
 * 
 */
export type Mark = $Result.DefaultSelection<Prisma.$MarkPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Aptitude: {
  APTE: 'APTE',
  INAPTE: 'INAPTE'
};

export type Aptitude = (typeof Aptitude)[keyof typeof Aptitude]


export const EpOptionnel: {
  ESPAGNOL: 'ESPAGNOL',
  ALLEMAND: 'ALLEMAND',
  ITALIEN: 'ITALIEN',
  ARABE: 'ARABE',
  PORTUGAIS: 'PORTUGAIS',
  RUSSE: 'RUSSE',
  TECHNOLOGIE: 'TECHNOLOGIE',
  ECONOMIE_FAMILIALE: 'ECONOMIE_FAMILIALE'
};

export type EpOptionnel = (typeof EpOptionnel)[keyof typeof EpOptionnel]


export const Gender: {
  MASCULIN: 'MASCULIN',
  FEMININ: 'FEMININ'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const PresenceType: {
  PRESENT: 'PRESENT',
  ABSENT: 'ABSENT'
};

export type PresenceType = (typeof PresenceType)[keyof typeof PresenceType]


export const Statut: {
  PU: 'PU',
  PR: 'PR',
  CL: 'CL'
};

export type Statut = (typeof Statut)[keyof typeof Statut]


export const TypeEtablissement: {
  COLLEGE: 'COLLEGE',
  LYCEE: 'LYCEE',
  MIXTE_LYCEE_COLLEGE: 'MIXTE_LYCEE_COLLEGE',
  COLLEGE_PRIVE: 'COLLEGE_PRIVE',
  COLLEGE_PRIVE_MIXTE: 'COLLEGE_PRIVE_MIXTE',
  LYCEE_PRIVE_MIXTE: 'LYCEE_PRIVE_MIXTE'
};

export type TypeEtablissement = (typeof TypeEtablissement)[keyof typeof TypeEtablissement]

}

export type Aptitude = $Enums.Aptitude

export const Aptitude: typeof $Enums.Aptitude

export type EpOptionnel = $Enums.EpOptionnel

export const EpOptionnel: typeof $Enums.EpOptionnel

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type PresenceType = $Enums.PresenceType

export const PresenceType: typeof $Enums.PresenceType

export type Statut = $Enums.Statut

export const Statut: typeof $Enums.Statut

export type TypeEtablissement = $Enums.TypeEtablissement

export const TypeEtablissement: typeof $Enums.TypeEtablissement

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Contacts
 * const contacts = await prisma.contact.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Contacts
   * const contacts = await prisma.contact.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidat`: Exposes CRUD operations for the **Candidat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidats
    * const candidats = await prisma.candidat.findMany()
    * ```
    */
  get candidat(): Prisma.CandidatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.anonymat`: Exposes CRUD operations for the **Anonymat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Anonymats
    * const anonymats = await prisma.anonymat.findMany()
    * ```
    */
  get anonymat(): Prisma.AnonymatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zone`: Exposes CRUD operations for the **Zone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Zones
    * const zones = await prisma.zone.findMany()
    * ```
    */
  get zone(): Prisma.ZoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.centre`: Exposes CRUD operations for the **Centre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Centres
    * const centres = await prisma.centre.findMany()
    * ```
    */
  get centre(): Prisma.CentreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.etablissement`: Exposes CRUD operations for the **Etablissement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Etablissements
    * const etablissements = await prisma.etablissement.findMany()
    * ```
    */
  get etablissement(): Prisma.EtablissementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupe`: Exposes CRUD operations for the **Groupe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groupes
    * const groupes = await prisma.groupe.findMany()
    * ```
    */
  get groupe(): Prisma.GroupeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jury`: Exposes CRUD operations for the **Jury** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Juries
    * const juries = await prisma.jury.findMany()
    * ```
    */
  get jury(): Prisma.JuryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matiere`: Exposes CRUD operations for the **Matiere** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matieres
    * const matieres = await prisma.matiere.findMany()
    * ```
    */
  get matiere(): Prisma.MatiereDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resultat`: Exposes CRUD operations for the **Resultat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resultats
    * const resultats = await prisma.resultat.findMany()
    * ```
    */
  get resultat(): Prisma.ResultatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mark`: Exposes CRUD operations for the **Mark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Marks
    * const marks = await prisma.mark.findMany()
    * ```
    */
  get mark(): Prisma.MarkDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Contact: 'Contact',
    Post: 'Post',
    Candidat: 'Candidat',
    Anonymat: 'Anonymat',
    Zone: 'Zone',
    Centre: 'Centre',
    Etablissement: 'Etablissement',
    Groupe: 'Groupe',
    Jury: 'Jury',
    Matiere: 'Matiere',
    Note: 'Note',
    Resultat: 'Resultat',
    Mark: 'Mark'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "contact" | "post" | "candidat" | "anonymat" | "zone" | "centre" | "etablissement" | "groupe" | "jury" | "matiere" | "note" | "resultat" | "mark"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Candidat: {
        payload: Prisma.$CandidatPayload<ExtArgs>
        fields: Prisma.CandidatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatPayload>
          }
          findFirst: {
            args: Prisma.CandidatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatPayload>
          }
          findMany: {
            args: Prisma.CandidatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatPayload>[]
          }
          create: {
            args: Prisma.CandidatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatPayload>
          }
          createMany: {
            args: Prisma.CandidatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatPayload>[]
          }
          delete: {
            args: Prisma.CandidatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatPayload>
          }
          update: {
            args: Prisma.CandidatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatPayload>
          }
          deleteMany: {
            args: Prisma.CandidatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatPayload>[]
          }
          upsert: {
            args: Prisma.CandidatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatPayload>
          }
          aggregate: {
            args: Prisma.CandidatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidat>
          }
          groupBy: {
            args: Prisma.CandidatGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidatGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidatCountArgs<ExtArgs>
            result: $Utils.Optional<CandidatCountAggregateOutputType> | number
          }
        }
      }
      Anonymat: {
        payload: Prisma.$AnonymatPayload<ExtArgs>
        fields: Prisma.AnonymatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnonymatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnonymatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymatPayload>
          }
          findFirst: {
            args: Prisma.AnonymatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnonymatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymatPayload>
          }
          findMany: {
            args: Prisma.AnonymatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymatPayload>[]
          }
          create: {
            args: Prisma.AnonymatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymatPayload>
          }
          createMany: {
            args: Prisma.AnonymatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnonymatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymatPayload>[]
          }
          delete: {
            args: Prisma.AnonymatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymatPayload>
          }
          update: {
            args: Prisma.AnonymatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymatPayload>
          }
          deleteMany: {
            args: Prisma.AnonymatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnonymatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnonymatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymatPayload>[]
          }
          upsert: {
            args: Prisma.AnonymatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymatPayload>
          }
          aggregate: {
            args: Prisma.AnonymatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnonymat>
          }
          groupBy: {
            args: Prisma.AnonymatGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnonymatGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnonymatCountArgs<ExtArgs>
            result: $Utils.Optional<AnonymatCountAggregateOutputType> | number
          }
        }
      }
      Zone: {
        payload: Prisma.$ZonePayload<ExtArgs>
        fields: Prisma.ZoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          findFirst: {
            args: Prisma.ZoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          findMany: {
            args: Prisma.ZoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>[]
          }
          create: {
            args: Prisma.ZoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          createMany: {
            args: Prisma.ZoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>[]
          }
          delete: {
            args: Prisma.ZoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          update: {
            args: Prisma.ZoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          deleteMany: {
            args: Prisma.ZoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ZoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>[]
          }
          upsert: {
            args: Prisma.ZoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          aggregate: {
            args: Prisma.ZoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZone>
          }
          groupBy: {
            args: Prisma.ZoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZoneCountArgs<ExtArgs>
            result: $Utils.Optional<ZoneCountAggregateOutputType> | number
          }
        }
      }
      Centre: {
        payload: Prisma.$CentrePayload<ExtArgs>
        fields: Prisma.CentreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CentreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CentreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentrePayload>
          }
          findFirst: {
            args: Prisma.CentreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CentreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentrePayload>
          }
          findMany: {
            args: Prisma.CentreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentrePayload>[]
          }
          create: {
            args: Prisma.CentreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentrePayload>
          }
          createMany: {
            args: Prisma.CentreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CentreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentrePayload>[]
          }
          delete: {
            args: Prisma.CentreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentrePayload>
          }
          update: {
            args: Prisma.CentreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentrePayload>
          }
          deleteMany: {
            args: Prisma.CentreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CentreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CentreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentrePayload>[]
          }
          upsert: {
            args: Prisma.CentreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentrePayload>
          }
          aggregate: {
            args: Prisma.CentreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCentre>
          }
          groupBy: {
            args: Prisma.CentreGroupByArgs<ExtArgs>
            result: $Utils.Optional<CentreGroupByOutputType>[]
          }
          count: {
            args: Prisma.CentreCountArgs<ExtArgs>
            result: $Utils.Optional<CentreCountAggregateOutputType> | number
          }
        }
      }
      Etablissement: {
        payload: Prisma.$EtablissementPayload<ExtArgs>
        fields: Prisma.EtablissementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EtablissementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EtablissementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload>
          }
          findFirst: {
            args: Prisma.EtablissementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EtablissementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload>
          }
          findMany: {
            args: Prisma.EtablissementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload>[]
          }
          create: {
            args: Prisma.EtablissementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload>
          }
          createMany: {
            args: Prisma.EtablissementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EtablissementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload>[]
          }
          delete: {
            args: Prisma.EtablissementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload>
          }
          update: {
            args: Prisma.EtablissementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload>
          }
          deleteMany: {
            args: Prisma.EtablissementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EtablissementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EtablissementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload>[]
          }
          upsert: {
            args: Prisma.EtablissementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload>
          }
          aggregate: {
            args: Prisma.EtablissementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEtablissement>
          }
          groupBy: {
            args: Prisma.EtablissementGroupByArgs<ExtArgs>
            result: $Utils.Optional<EtablissementGroupByOutputType>[]
          }
          count: {
            args: Prisma.EtablissementCountArgs<ExtArgs>
            result: $Utils.Optional<EtablissementCountAggregateOutputType> | number
          }
        }
      }
      Groupe: {
        payload: Prisma.$GroupePayload<ExtArgs>
        fields: Prisma.GroupeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>
          }
          findFirst: {
            args: Prisma.GroupeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>
          }
          findMany: {
            args: Prisma.GroupeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>[]
          }
          create: {
            args: Prisma.GroupeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>
          }
          createMany: {
            args: Prisma.GroupeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>[]
          }
          delete: {
            args: Prisma.GroupeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>
          }
          update: {
            args: Prisma.GroupeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>
          }
          deleteMany: {
            args: Prisma.GroupeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>[]
          }
          upsert: {
            args: Prisma.GroupeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>
          }
          aggregate: {
            args: Prisma.GroupeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupe>
          }
          groupBy: {
            args: Prisma.GroupeGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupeGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupeCountArgs<ExtArgs>
            result: $Utils.Optional<GroupeCountAggregateOutputType> | number
          }
        }
      }
      Jury: {
        payload: Prisma.$JuryPayload<ExtArgs>
        fields: Prisma.JuryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JuryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JuryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuryPayload>
          }
          findFirst: {
            args: Prisma.JuryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JuryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuryPayload>
          }
          findMany: {
            args: Prisma.JuryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuryPayload>[]
          }
          create: {
            args: Prisma.JuryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuryPayload>
          }
          createMany: {
            args: Prisma.JuryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JuryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuryPayload>[]
          }
          delete: {
            args: Prisma.JuryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuryPayload>
          }
          update: {
            args: Prisma.JuryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuryPayload>
          }
          deleteMany: {
            args: Prisma.JuryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JuryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JuryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuryPayload>[]
          }
          upsert: {
            args: Prisma.JuryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuryPayload>
          }
          aggregate: {
            args: Prisma.JuryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJury>
          }
          groupBy: {
            args: Prisma.JuryGroupByArgs<ExtArgs>
            result: $Utils.Optional<JuryGroupByOutputType>[]
          }
          count: {
            args: Prisma.JuryCountArgs<ExtArgs>
            result: $Utils.Optional<JuryCountAggregateOutputType> | number
          }
        }
      }
      Matiere: {
        payload: Prisma.$MatierePayload<ExtArgs>
        fields: Prisma.MatiereFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatiereFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatierePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatiereFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatierePayload>
          }
          findFirst: {
            args: Prisma.MatiereFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatierePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatiereFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatierePayload>
          }
          findMany: {
            args: Prisma.MatiereFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatierePayload>[]
          }
          create: {
            args: Prisma.MatiereCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatierePayload>
          }
          createMany: {
            args: Prisma.MatiereCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatiereCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatierePayload>[]
          }
          delete: {
            args: Prisma.MatiereDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatierePayload>
          }
          update: {
            args: Prisma.MatiereUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatierePayload>
          }
          deleteMany: {
            args: Prisma.MatiereDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatiereUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatiereUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatierePayload>[]
          }
          upsert: {
            args: Prisma.MatiereUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatierePayload>
          }
          aggregate: {
            args: Prisma.MatiereAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatiere>
          }
          groupBy: {
            args: Prisma.MatiereGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatiereGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatiereCountArgs<ExtArgs>
            result: $Utils.Optional<MatiereCountAggregateOutputType> | number
          }
        }
      }
      Note: {
        payload: Prisma.$NotePayload<ExtArgs>
        fields: Prisma.NoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findFirst: {
            args: Prisma.NoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findMany: {
            args: Prisma.NoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          create: {
            args: Prisma.NoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          createMany: {
            args: Prisma.NoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          delete: {
            args: Prisma.NoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          update: {
            args: Prisma.NoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          deleteMany: {
            args: Prisma.NoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          upsert: {
            args: Prisma.NoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.NoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteCountArgs<ExtArgs>
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
      Resultat: {
        payload: Prisma.$ResultatPayload<ExtArgs>
        fields: Prisma.ResultatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResultatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResultatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultatPayload>
          }
          findFirst: {
            args: Prisma.ResultatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResultatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultatPayload>
          }
          findMany: {
            args: Prisma.ResultatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultatPayload>[]
          }
          create: {
            args: Prisma.ResultatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultatPayload>
          }
          createMany: {
            args: Prisma.ResultatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResultatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultatPayload>[]
          }
          delete: {
            args: Prisma.ResultatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultatPayload>
          }
          update: {
            args: Prisma.ResultatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultatPayload>
          }
          deleteMany: {
            args: Prisma.ResultatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResultatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResultatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultatPayload>[]
          }
          upsert: {
            args: Prisma.ResultatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultatPayload>
          }
          aggregate: {
            args: Prisma.ResultatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResultat>
          }
          groupBy: {
            args: Prisma.ResultatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResultatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResultatCountArgs<ExtArgs>
            result: $Utils.Optional<ResultatCountAggregateOutputType> | number
          }
        }
      }
      Mark: {
        payload: Prisma.$MarkPayload<ExtArgs>
        fields: Prisma.MarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          findFirst: {
            args: Prisma.MarkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          findMany: {
            args: Prisma.MarkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>[]
          }
          create: {
            args: Prisma.MarkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          createMany: {
            args: Prisma.MarkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>[]
          }
          delete: {
            args: Prisma.MarkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          update: {
            args: Prisma.MarkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          deleteMany: {
            args: Prisma.MarkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>[]
          }
          upsert: {
            args: Prisma.MarkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          aggregate: {
            args: Prisma.MarkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMark>
          }
          groupBy: {
            args: Prisma.MarkGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarkCountArgs<ExtArgs>
            result: $Utils.Optional<MarkCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    contact?: ContactOmit
    post?: PostOmit
    candidat?: CandidatOmit
    anonymat?: AnonymatOmit
    zone?: ZoneOmit
    centre?: CentreOmit
    etablissement?: EtablissementOmit
    groupe?: GroupeOmit
    jury?: JuryOmit
    matiere?: MatiereOmit
    note?: NoteOmit
    resultat?: ResultatOmit
    mark?: MarkOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CandidatCountOutputType
   */

  export type CandidatCountOutputType = {
    notes: number
    resultats: number
  }

  export type CandidatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | CandidatCountOutputTypeCountNotesArgs
    resultats?: boolean | CandidatCountOutputTypeCountResultatsArgs
  }

  // Custom InputTypes
  /**
   * CandidatCountOutputType without action
   */
  export type CandidatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidatCountOutputType
     */
    select?: CandidatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CandidatCountOutputType without action
   */
  export type CandidatCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }

  /**
   * CandidatCountOutputType without action
   */
  export type CandidatCountOutputTypeCountResultatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultatWhereInput
  }


  /**
   * Count Type ZoneCountOutputType
   */

  export type ZoneCountOutputType = {
    centres: number
    etablissements: number
  }

  export type ZoneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    centres?: boolean | ZoneCountOutputTypeCountCentresArgs
    etablissements?: boolean | ZoneCountOutputTypeCountEtablissementsArgs
  }

  // Custom InputTypes
  /**
   * ZoneCountOutputType without action
   */
  export type ZoneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneCountOutputType
     */
    select?: ZoneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ZoneCountOutputType without action
   */
  export type ZoneCountOutputTypeCountCentresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CentreWhereInput
  }

  /**
   * ZoneCountOutputType without action
   */
  export type ZoneCountOutputTypeCountEtablissementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtablissementWhereInput
  }


  /**
   * Count Type CentreCountOutputType
   */

  export type CentreCountOutputType = {
    jurys: number
  }

  export type CentreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jurys?: boolean | CentreCountOutputTypeCountJurysArgs
  }

  // Custom InputTypes
  /**
   * CentreCountOutputType without action
   */
  export type CentreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentreCountOutputType
     */
    select?: CentreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CentreCountOutputType without action
   */
  export type CentreCountOutputTypeCountJurysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JuryWhereInput
  }


  /**
   * Count Type EtablissementCountOutputType
   */

  export type EtablissementCountOutputType = {
    candidats: number
  }

  export type EtablissementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidats?: boolean | EtablissementCountOutputTypeCountCandidatsArgs
  }

  // Custom InputTypes
  /**
   * EtablissementCountOutputType without action
   */
  export type EtablissementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtablissementCountOutputType
     */
    select?: EtablissementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EtablissementCountOutputType without action
   */
  export type EtablissementCountOutputTypeCountCandidatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidatWhereInput
  }


  /**
   * Count Type MatiereCountOutputType
   */

  export type MatiereCountOutputType = {
    notes: number
  }

  export type MatiereCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | MatiereCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * MatiereCountOutputType without action
   */
  export type MatiereCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatiereCountOutputType
     */
    select?: MatiereCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatiereCountOutputType without action
   */
  export type MatiereCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactSumAggregateOutputType = {
    id: number | null
  }

  export type ContactMinAggregateOutputType = {
    id: number | null
    prenom: string | null
    nom: string | null
    email: string | null
    description: string | null
    phone: string | null
    adresse: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: number | null
    prenom: string | null
    nom: string | null
    email: string | null
    description: string | null
    phone: string | null
    adresse: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    prenom: number
    nom: number
    email: number
    description: number
    phone: number
    adresse: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    id?: true
  }

  export type ContactSumAggregateInputType = {
    id?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    prenom?: true
    nom?: true
    email?: true
    description?: true
    phone?: true
    adresse?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    prenom?: true
    nom?: true
    email?: true
    description?: true
    phone?: true
    adresse?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    prenom?: true
    nom?: true
    email?: true
    description?: true
    phone?: true
    adresse?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: number
    prenom: string
    nom: string
    email: string
    description: string | null
    phone: string | null
    adresse: string | null
    createdAt: Date
    updatedAt: Date
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prenom?: boolean
    nom?: boolean
    email?: boolean
    description?: boolean
    phone?: boolean
    adresse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prenom?: boolean
    nom?: boolean
    email?: boolean
    description?: boolean
    phone?: boolean
    adresse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prenom?: boolean
    nom?: boolean
    email?: boolean
    description?: boolean
    phone?: boolean
    adresse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    prenom?: boolean
    nom?: boolean
    email?: boolean
    description?: boolean
    phone?: boolean
    adresse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prenom" | "nom" | "email" | "description" | "phone" | "adresse" | "createdAt" | "updatedAt", ExtArgs["result"]["contact"]>

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      prenom: string
      nom: string
      email: string
      description: string | null
      phone: string | null
      adresse: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'Int'>
    readonly prenom: FieldRef<"Contact", 'String'>
    readonly nom: FieldRef<"Contact", 'String'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly description: FieldRef<"Contact", 'String'>
    readonly phone: FieldRef<"Contact", 'String'>
    readonly adresse: FieldRef<"Contact", 'String'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
    readonly updatedAt: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    content: string | null
    published: boolean | null
    authorId: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    content: string | null
    published: boolean | null
    authorId: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    content: number
    published: number
    authorId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    published?: true
    authorId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    published?: true
    authorId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    published?: true
    authorId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    title: string
    slug: string
    content: string | null
    published: boolean
    authorId: string
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "content" | "published" | "authorId", ExtArgs["result"]["post"]>

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      slug: string
      content: string | null
      published: boolean
      authorId: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly title: FieldRef<"Post", 'String'>
    readonly slug: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly published: FieldRef<"Post", 'Boolean'>
    readonly authorId: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
  }


  /**
   * Model Candidat
   */

  export type AggregateCandidat = {
    _count: CandidatCountAggregateOutputType | null
    _avg: CandidatAvgAggregateOutputType | null
    _sum: CandidatSumAggregateOutputType | null
    _min: CandidatMinAggregateOutputType | null
    _max: CandidatMaxAggregateOutputType | null
  }

  export type CandidatAvgAggregateOutputType = {
    id: number | null
    etablissement_id: number | null
  }

  export type CandidatSumAggregateOutputType = {
    id: number | null
    etablissement_id: number | null
  }

  export type CandidatMinAggregateOutputType = {
    id: number | null
    prenoms: string | null
    nom: string | null
    date_naissance: Date | null
    lieu_naissance: string | null
    sexe: string | null
    aptitude: string | null
    section: string | null
    option: string | null
    etat: boolean | null
    etablissement_id: number | null
  }

  export type CandidatMaxAggregateOutputType = {
    id: number | null
    prenoms: string | null
    nom: string | null
    date_naissance: Date | null
    lieu_naissance: string | null
    sexe: string | null
    aptitude: string | null
    section: string | null
    option: string | null
    etat: boolean | null
    etablissement_id: number | null
  }

  export type CandidatCountAggregateOutputType = {
    id: number
    prenoms: number
    nom: number
    date_naissance: number
    lieu_naissance: number
    sexe: number
    aptitude: number
    section: number
    option: number
    etat: number
    etablissement_id: number
    _all: number
  }


  export type CandidatAvgAggregateInputType = {
    id?: true
    etablissement_id?: true
  }

  export type CandidatSumAggregateInputType = {
    id?: true
    etablissement_id?: true
  }

  export type CandidatMinAggregateInputType = {
    id?: true
    prenoms?: true
    nom?: true
    date_naissance?: true
    lieu_naissance?: true
    sexe?: true
    aptitude?: true
    section?: true
    option?: true
    etat?: true
    etablissement_id?: true
  }

  export type CandidatMaxAggregateInputType = {
    id?: true
    prenoms?: true
    nom?: true
    date_naissance?: true
    lieu_naissance?: true
    sexe?: true
    aptitude?: true
    section?: true
    option?: true
    etat?: true
    etablissement_id?: true
  }

  export type CandidatCountAggregateInputType = {
    id?: true
    prenoms?: true
    nom?: true
    date_naissance?: true
    lieu_naissance?: true
    sexe?: true
    aptitude?: true
    section?: true
    option?: true
    etat?: true
    etablissement_id?: true
    _all?: true
  }

  export type CandidatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidat to aggregate.
     */
    where?: CandidatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidats to fetch.
     */
    orderBy?: CandidatOrderByWithRelationInput | CandidatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Candidats
    **/
    _count?: true | CandidatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CandidatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CandidatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidatMaxAggregateInputType
  }

  export type GetCandidatAggregateType<T extends CandidatAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidat[P]>
      : GetScalarType<T[P], AggregateCandidat[P]>
  }




  export type CandidatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidatWhereInput
    orderBy?: CandidatOrderByWithAggregationInput | CandidatOrderByWithAggregationInput[]
    by: CandidatScalarFieldEnum[] | CandidatScalarFieldEnum
    having?: CandidatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidatCountAggregateInputType | true
    _avg?: CandidatAvgAggregateInputType
    _sum?: CandidatSumAggregateInputType
    _min?: CandidatMinAggregateInputType
    _max?: CandidatMaxAggregateInputType
  }

  export type CandidatGroupByOutputType = {
    id: number
    prenoms: string
    nom: string
    date_naissance: Date
    lieu_naissance: string
    sexe: string
    aptitude: string
    section: string
    option: string
    etat: boolean
    etablissement_id: number
    _count: CandidatCountAggregateOutputType | null
    _avg: CandidatAvgAggregateOutputType | null
    _sum: CandidatSumAggregateOutputType | null
    _min: CandidatMinAggregateOutputType | null
    _max: CandidatMaxAggregateOutputType | null
  }

  type GetCandidatGroupByPayload<T extends CandidatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidatGroupByOutputType[P]>
            : GetScalarType<T[P], CandidatGroupByOutputType[P]>
        }
      >
    >


  export type CandidatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prenoms?: boolean
    nom?: boolean
    date_naissance?: boolean
    lieu_naissance?: boolean
    sexe?: boolean
    aptitude?: boolean
    section?: boolean
    option?: boolean
    etat?: boolean
    etablissement_id?: boolean
    etablissement?: boolean | EtablissementDefaultArgs<ExtArgs>
    notes?: boolean | Candidat$notesArgs<ExtArgs>
    resultats?: boolean | Candidat$resultatsArgs<ExtArgs>
    Anonymat?: boolean | Candidat$AnonymatArgs<ExtArgs>
    mark?: boolean | Candidat$markArgs<ExtArgs>
    _count?: boolean | CandidatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidat"]>

  export type CandidatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prenoms?: boolean
    nom?: boolean
    date_naissance?: boolean
    lieu_naissance?: boolean
    sexe?: boolean
    aptitude?: boolean
    section?: boolean
    option?: boolean
    etat?: boolean
    etablissement_id?: boolean
    etablissement?: boolean | EtablissementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidat"]>

  export type CandidatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prenoms?: boolean
    nom?: boolean
    date_naissance?: boolean
    lieu_naissance?: boolean
    sexe?: boolean
    aptitude?: boolean
    section?: boolean
    option?: boolean
    etat?: boolean
    etablissement_id?: boolean
    etablissement?: boolean | EtablissementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidat"]>

  export type CandidatSelectScalar = {
    id?: boolean
    prenoms?: boolean
    nom?: boolean
    date_naissance?: boolean
    lieu_naissance?: boolean
    sexe?: boolean
    aptitude?: boolean
    section?: boolean
    option?: boolean
    etat?: boolean
    etablissement_id?: boolean
  }

  export type CandidatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prenoms" | "nom" | "date_naissance" | "lieu_naissance" | "sexe" | "aptitude" | "section" | "option" | "etat" | "etablissement_id", ExtArgs["result"]["candidat"]>
  export type CandidatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etablissement?: boolean | EtablissementDefaultArgs<ExtArgs>
    notes?: boolean | Candidat$notesArgs<ExtArgs>
    resultats?: boolean | Candidat$resultatsArgs<ExtArgs>
    Anonymat?: boolean | Candidat$AnonymatArgs<ExtArgs>
    mark?: boolean | Candidat$markArgs<ExtArgs>
    _count?: boolean | CandidatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CandidatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etablissement?: boolean | EtablissementDefaultArgs<ExtArgs>
  }
  export type CandidatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etablissement?: boolean | EtablissementDefaultArgs<ExtArgs>
  }

  export type $CandidatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Candidat"
    objects: {
      etablissement: Prisma.$EtablissementPayload<ExtArgs>
      notes: Prisma.$NotePayload<ExtArgs>[]
      resultats: Prisma.$ResultatPayload<ExtArgs>[]
      Anonymat: Prisma.$AnonymatPayload<ExtArgs> | null
      mark: Prisma.$MarkPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      prenoms: string
      nom: string
      date_naissance: Date
      lieu_naissance: string
      sexe: string
      aptitude: string
      section: string
      option: string
      etat: boolean
      etablissement_id: number
    }, ExtArgs["result"]["candidat"]>
    composites: {}
  }

  type CandidatGetPayload<S extends boolean | null | undefined | CandidatDefaultArgs> = $Result.GetResult<Prisma.$CandidatPayload, S>

  type CandidatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidatCountAggregateInputType | true
    }

  export interface CandidatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Candidat'], meta: { name: 'Candidat' } }
    /**
     * Find zero or one Candidat that matches the filter.
     * @param {CandidatFindUniqueArgs} args - Arguments to find a Candidat
     * @example
     * // Get one Candidat
     * const candidat = await prisma.candidat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidatFindUniqueArgs>(args: SelectSubset<T, CandidatFindUniqueArgs<ExtArgs>>): Prisma__CandidatClient<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidatFindUniqueOrThrowArgs} args - Arguments to find a Candidat
     * @example
     * // Get one Candidat
     * const candidat = await prisma.candidat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidatFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidatClient<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatFindFirstArgs} args - Arguments to find a Candidat
     * @example
     * // Get one Candidat
     * const candidat = await prisma.candidat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidatFindFirstArgs>(args?: SelectSubset<T, CandidatFindFirstArgs<ExtArgs>>): Prisma__CandidatClient<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatFindFirstOrThrowArgs} args - Arguments to find a Candidat
     * @example
     * // Get one Candidat
     * const candidat = await prisma.candidat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidatFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidatFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidatClient<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidats
     * const candidats = await prisma.candidat.findMany()
     * 
     * // Get first 10 Candidats
     * const candidats = await prisma.candidat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidatWithIdOnly = await prisma.candidat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CandidatFindManyArgs>(args?: SelectSubset<T, CandidatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidat.
     * @param {CandidatCreateArgs} args - Arguments to create a Candidat.
     * @example
     * // Create one Candidat
     * const Candidat = await prisma.candidat.create({
     *   data: {
     *     // ... data to create a Candidat
     *   }
     * })
     * 
     */
    create<T extends CandidatCreateArgs>(args: SelectSubset<T, CandidatCreateArgs<ExtArgs>>): Prisma__CandidatClient<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidats.
     * @param {CandidatCreateManyArgs} args - Arguments to create many Candidats.
     * @example
     * // Create many Candidats
     * const candidat = await prisma.candidat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidatCreateManyArgs>(args?: SelectSubset<T, CandidatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Candidats and returns the data saved in the database.
     * @param {CandidatCreateManyAndReturnArgs} args - Arguments to create many Candidats.
     * @example
     * // Create many Candidats
     * const candidat = await prisma.candidat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Candidats and only return the `id`
     * const candidatWithIdOnly = await prisma.candidat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidatCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Candidat.
     * @param {CandidatDeleteArgs} args - Arguments to delete one Candidat.
     * @example
     * // Delete one Candidat
     * const Candidat = await prisma.candidat.delete({
     *   where: {
     *     // ... filter to delete one Candidat
     *   }
     * })
     * 
     */
    delete<T extends CandidatDeleteArgs>(args: SelectSubset<T, CandidatDeleteArgs<ExtArgs>>): Prisma__CandidatClient<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidat.
     * @param {CandidatUpdateArgs} args - Arguments to update one Candidat.
     * @example
     * // Update one Candidat
     * const candidat = await prisma.candidat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidatUpdateArgs>(args: SelectSubset<T, CandidatUpdateArgs<ExtArgs>>): Prisma__CandidatClient<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidats.
     * @param {CandidatDeleteManyArgs} args - Arguments to filter Candidats to delete.
     * @example
     * // Delete a few Candidats
     * const { count } = await prisma.candidat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidatDeleteManyArgs>(args?: SelectSubset<T, CandidatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidats
     * const candidat = await prisma.candidat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidatUpdateManyArgs>(args: SelectSubset<T, CandidatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidats and returns the data updated in the database.
     * @param {CandidatUpdateManyAndReturnArgs} args - Arguments to update many Candidats.
     * @example
     * // Update many Candidats
     * const candidat = await prisma.candidat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Candidats and only return the `id`
     * const candidatWithIdOnly = await prisma.candidat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CandidatUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Candidat.
     * @param {CandidatUpsertArgs} args - Arguments to update or create a Candidat.
     * @example
     * // Update or create a Candidat
     * const candidat = await prisma.candidat.upsert({
     *   create: {
     *     // ... data to create a Candidat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidat we want to update
     *   }
     * })
     */
    upsert<T extends CandidatUpsertArgs>(args: SelectSubset<T, CandidatUpsertArgs<ExtArgs>>): Prisma__CandidatClient<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatCountArgs} args - Arguments to filter Candidats to count.
     * @example
     * // Count the number of Candidats
     * const count = await prisma.candidat.count({
     *   where: {
     *     // ... the filter for the Candidats we want to count
     *   }
     * })
    **/
    count<T extends CandidatCountArgs>(
      args?: Subset<T, CandidatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidatAggregateArgs>(args: Subset<T, CandidatAggregateArgs>): Prisma.PrismaPromise<GetCandidatAggregateType<T>>

    /**
     * Group by Candidat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CandidatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidatGroupByArgs['orderBy'] }
        : { orderBy?: CandidatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CandidatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Candidat model
   */
  readonly fields: CandidatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Candidat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    etablissement<T extends EtablissementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EtablissementDefaultArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notes<T extends Candidat$notesArgs<ExtArgs> = {}>(args?: Subset<T, Candidat$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resultats<T extends Candidat$resultatsArgs<ExtArgs> = {}>(args?: Subset<T, Candidat$resultatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Anonymat<T extends Candidat$AnonymatArgs<ExtArgs> = {}>(args?: Subset<T, Candidat$AnonymatArgs<ExtArgs>>): Prisma__AnonymatClient<$Result.GetResult<Prisma.$AnonymatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mark<T extends Candidat$markArgs<ExtArgs> = {}>(args?: Subset<T, Candidat$markArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Candidat model
   */
  interface CandidatFieldRefs {
    readonly id: FieldRef<"Candidat", 'Int'>
    readonly prenoms: FieldRef<"Candidat", 'String'>
    readonly nom: FieldRef<"Candidat", 'String'>
    readonly date_naissance: FieldRef<"Candidat", 'DateTime'>
    readonly lieu_naissance: FieldRef<"Candidat", 'String'>
    readonly sexe: FieldRef<"Candidat", 'String'>
    readonly aptitude: FieldRef<"Candidat", 'String'>
    readonly section: FieldRef<"Candidat", 'String'>
    readonly option: FieldRef<"Candidat", 'String'>
    readonly etat: FieldRef<"Candidat", 'Boolean'>
    readonly etablissement_id: FieldRef<"Candidat", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Candidat findUnique
   */
  export type CandidatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatInclude<ExtArgs> | null
    /**
     * Filter, which Candidat to fetch.
     */
    where: CandidatWhereUniqueInput
  }

  /**
   * Candidat findUniqueOrThrow
   */
  export type CandidatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatInclude<ExtArgs> | null
    /**
     * Filter, which Candidat to fetch.
     */
    where: CandidatWhereUniqueInput
  }

  /**
   * Candidat findFirst
   */
  export type CandidatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatInclude<ExtArgs> | null
    /**
     * Filter, which Candidat to fetch.
     */
    where?: CandidatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidats to fetch.
     */
    orderBy?: CandidatOrderByWithRelationInput | CandidatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidats.
     */
    cursor?: CandidatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidats.
     */
    distinct?: CandidatScalarFieldEnum | CandidatScalarFieldEnum[]
  }

  /**
   * Candidat findFirstOrThrow
   */
  export type CandidatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatInclude<ExtArgs> | null
    /**
     * Filter, which Candidat to fetch.
     */
    where?: CandidatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidats to fetch.
     */
    orderBy?: CandidatOrderByWithRelationInput | CandidatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidats.
     */
    cursor?: CandidatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidats.
     */
    distinct?: CandidatScalarFieldEnum | CandidatScalarFieldEnum[]
  }

  /**
   * Candidat findMany
   */
  export type CandidatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatInclude<ExtArgs> | null
    /**
     * Filter, which Candidats to fetch.
     */
    where?: CandidatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidats to fetch.
     */
    orderBy?: CandidatOrderByWithRelationInput | CandidatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Candidats.
     */
    cursor?: CandidatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidats.
     */
    skip?: number
    distinct?: CandidatScalarFieldEnum | CandidatScalarFieldEnum[]
  }

  /**
   * Candidat create
   */
  export type CandidatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatInclude<ExtArgs> | null
    /**
     * The data needed to create a Candidat.
     */
    data: XOR<CandidatCreateInput, CandidatUncheckedCreateInput>
  }

  /**
   * Candidat createMany
   */
  export type CandidatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Candidats.
     */
    data: CandidatCreateManyInput | CandidatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Candidat createManyAndReturn
   */
  export type CandidatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * The data used to create many Candidats.
     */
    data: CandidatCreateManyInput | CandidatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Candidat update
   */
  export type CandidatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatInclude<ExtArgs> | null
    /**
     * The data needed to update a Candidat.
     */
    data: XOR<CandidatUpdateInput, CandidatUncheckedUpdateInput>
    /**
     * Choose, which Candidat to update.
     */
    where: CandidatWhereUniqueInput
  }

  /**
   * Candidat updateMany
   */
  export type CandidatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Candidats.
     */
    data: XOR<CandidatUpdateManyMutationInput, CandidatUncheckedUpdateManyInput>
    /**
     * Filter which Candidats to update
     */
    where?: CandidatWhereInput
    /**
     * Limit how many Candidats to update.
     */
    limit?: number
  }

  /**
   * Candidat updateManyAndReturn
   */
  export type CandidatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * The data used to update Candidats.
     */
    data: XOR<CandidatUpdateManyMutationInput, CandidatUncheckedUpdateManyInput>
    /**
     * Filter which Candidats to update
     */
    where?: CandidatWhereInput
    /**
     * Limit how many Candidats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Candidat upsert
   */
  export type CandidatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatInclude<ExtArgs> | null
    /**
     * The filter to search for the Candidat to update in case it exists.
     */
    where: CandidatWhereUniqueInput
    /**
     * In case the Candidat found by the `where` argument doesn't exist, create a new Candidat with this data.
     */
    create: XOR<CandidatCreateInput, CandidatUncheckedCreateInput>
    /**
     * In case the Candidat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidatUpdateInput, CandidatUncheckedUpdateInput>
  }

  /**
   * Candidat delete
   */
  export type CandidatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatInclude<ExtArgs> | null
    /**
     * Filter which Candidat to delete.
     */
    where: CandidatWhereUniqueInput
  }

  /**
   * Candidat deleteMany
   */
  export type CandidatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidats to delete
     */
    where?: CandidatWhereInput
    /**
     * Limit how many Candidats to delete.
     */
    limit?: number
  }

  /**
   * Candidat.notes
   */
  export type Candidat$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Candidat.resultats
   */
  export type Candidat$resultatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultat
     */
    select?: ResultatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultat
     */
    omit?: ResultatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultatInclude<ExtArgs> | null
    where?: ResultatWhereInput
    orderBy?: ResultatOrderByWithRelationInput | ResultatOrderByWithRelationInput[]
    cursor?: ResultatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResultatScalarFieldEnum | ResultatScalarFieldEnum[]
  }

  /**
   * Candidat.Anonymat
   */
  export type Candidat$AnonymatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anonymat
     */
    select?: AnonymatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anonymat
     */
    omit?: AnonymatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymatInclude<ExtArgs> | null
    where?: AnonymatWhereInput
  }

  /**
   * Candidat.mark
   */
  export type Candidat$markArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    where?: MarkWhereInput
  }

  /**
   * Candidat without action
   */
  export type CandidatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatInclude<ExtArgs> | null
  }


  /**
   * Model Anonymat
   */

  export type AggregateAnonymat = {
    _count: AnonymatCountAggregateOutputType | null
    _avg: AnonymatAvgAggregateOutputType | null
    _sum: AnonymatSumAggregateOutputType | null
    _min: AnonymatMinAggregateOutputType | null
    _max: AnonymatMaxAggregateOutputType | null
  }

  export type AnonymatAvgAggregateOutputType = {
    id: number | null
    candidatId: number | null
  }

  export type AnonymatSumAggregateOutputType = {
    id: number | null
    candidatId: number | null
  }

  export type AnonymatMinAggregateOutputType = {
    id: number | null
    code: string | null
    candidatId: number | null
  }

  export type AnonymatMaxAggregateOutputType = {
    id: number | null
    code: string | null
    candidatId: number | null
  }

  export type AnonymatCountAggregateOutputType = {
    id: number
    code: number
    candidatId: number
    _all: number
  }


  export type AnonymatAvgAggregateInputType = {
    id?: true
    candidatId?: true
  }

  export type AnonymatSumAggregateInputType = {
    id?: true
    candidatId?: true
  }

  export type AnonymatMinAggregateInputType = {
    id?: true
    code?: true
    candidatId?: true
  }

  export type AnonymatMaxAggregateInputType = {
    id?: true
    code?: true
    candidatId?: true
  }

  export type AnonymatCountAggregateInputType = {
    id?: true
    code?: true
    candidatId?: true
    _all?: true
  }

  export type AnonymatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anonymat to aggregate.
     */
    where?: AnonymatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anonymats to fetch.
     */
    orderBy?: AnonymatOrderByWithRelationInput | AnonymatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnonymatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anonymats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anonymats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Anonymats
    **/
    _count?: true | AnonymatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnonymatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnonymatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnonymatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnonymatMaxAggregateInputType
  }

  export type GetAnonymatAggregateType<T extends AnonymatAggregateArgs> = {
        [P in keyof T & keyof AggregateAnonymat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnonymat[P]>
      : GetScalarType<T[P], AggregateAnonymat[P]>
  }




  export type AnonymatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnonymatWhereInput
    orderBy?: AnonymatOrderByWithAggregationInput | AnonymatOrderByWithAggregationInput[]
    by: AnonymatScalarFieldEnum[] | AnonymatScalarFieldEnum
    having?: AnonymatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnonymatCountAggregateInputType | true
    _avg?: AnonymatAvgAggregateInputType
    _sum?: AnonymatSumAggregateInputType
    _min?: AnonymatMinAggregateInputType
    _max?: AnonymatMaxAggregateInputType
  }

  export type AnonymatGroupByOutputType = {
    id: number
    code: string
    candidatId: number
    _count: AnonymatCountAggregateOutputType | null
    _avg: AnonymatAvgAggregateOutputType | null
    _sum: AnonymatSumAggregateOutputType | null
    _min: AnonymatMinAggregateOutputType | null
    _max: AnonymatMaxAggregateOutputType | null
  }

  type GetAnonymatGroupByPayload<T extends AnonymatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnonymatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnonymatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnonymatGroupByOutputType[P]>
            : GetScalarType<T[P], AnonymatGroupByOutputType[P]>
        }
      >
    >


  export type AnonymatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    candidatId?: boolean
    candidat?: boolean | CandidatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anonymat"]>

  export type AnonymatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    candidatId?: boolean
    candidat?: boolean | CandidatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anonymat"]>

  export type AnonymatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    candidatId?: boolean
    candidat?: boolean | CandidatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anonymat"]>

  export type AnonymatSelectScalar = {
    id?: boolean
    code?: boolean
    candidatId?: boolean
  }

  export type AnonymatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "candidatId", ExtArgs["result"]["anonymat"]>
  export type AnonymatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidat?: boolean | CandidatDefaultArgs<ExtArgs>
  }
  export type AnonymatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidat?: boolean | CandidatDefaultArgs<ExtArgs>
  }
  export type AnonymatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidat?: boolean | CandidatDefaultArgs<ExtArgs>
  }

  export type $AnonymatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Anonymat"
    objects: {
      candidat: Prisma.$CandidatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      candidatId: number
    }, ExtArgs["result"]["anonymat"]>
    composites: {}
  }

  type AnonymatGetPayload<S extends boolean | null | undefined | AnonymatDefaultArgs> = $Result.GetResult<Prisma.$AnonymatPayload, S>

  type AnonymatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnonymatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnonymatCountAggregateInputType | true
    }

  export interface AnonymatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Anonymat'], meta: { name: 'Anonymat' } }
    /**
     * Find zero or one Anonymat that matches the filter.
     * @param {AnonymatFindUniqueArgs} args - Arguments to find a Anonymat
     * @example
     * // Get one Anonymat
     * const anonymat = await prisma.anonymat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnonymatFindUniqueArgs>(args: SelectSubset<T, AnonymatFindUniqueArgs<ExtArgs>>): Prisma__AnonymatClient<$Result.GetResult<Prisma.$AnonymatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Anonymat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnonymatFindUniqueOrThrowArgs} args - Arguments to find a Anonymat
     * @example
     * // Get one Anonymat
     * const anonymat = await prisma.anonymat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnonymatFindUniqueOrThrowArgs>(args: SelectSubset<T, AnonymatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnonymatClient<$Result.GetResult<Prisma.$AnonymatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Anonymat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymatFindFirstArgs} args - Arguments to find a Anonymat
     * @example
     * // Get one Anonymat
     * const anonymat = await prisma.anonymat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnonymatFindFirstArgs>(args?: SelectSubset<T, AnonymatFindFirstArgs<ExtArgs>>): Prisma__AnonymatClient<$Result.GetResult<Prisma.$AnonymatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Anonymat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymatFindFirstOrThrowArgs} args - Arguments to find a Anonymat
     * @example
     * // Get one Anonymat
     * const anonymat = await prisma.anonymat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnonymatFindFirstOrThrowArgs>(args?: SelectSubset<T, AnonymatFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnonymatClient<$Result.GetResult<Prisma.$AnonymatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Anonymats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Anonymats
     * const anonymats = await prisma.anonymat.findMany()
     * 
     * // Get first 10 Anonymats
     * const anonymats = await prisma.anonymat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const anonymatWithIdOnly = await prisma.anonymat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnonymatFindManyArgs>(args?: SelectSubset<T, AnonymatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnonymatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Anonymat.
     * @param {AnonymatCreateArgs} args - Arguments to create a Anonymat.
     * @example
     * // Create one Anonymat
     * const Anonymat = await prisma.anonymat.create({
     *   data: {
     *     // ... data to create a Anonymat
     *   }
     * })
     * 
     */
    create<T extends AnonymatCreateArgs>(args: SelectSubset<T, AnonymatCreateArgs<ExtArgs>>): Prisma__AnonymatClient<$Result.GetResult<Prisma.$AnonymatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Anonymats.
     * @param {AnonymatCreateManyArgs} args - Arguments to create many Anonymats.
     * @example
     * // Create many Anonymats
     * const anonymat = await prisma.anonymat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnonymatCreateManyArgs>(args?: SelectSubset<T, AnonymatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Anonymats and returns the data saved in the database.
     * @param {AnonymatCreateManyAndReturnArgs} args - Arguments to create many Anonymats.
     * @example
     * // Create many Anonymats
     * const anonymat = await prisma.anonymat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Anonymats and only return the `id`
     * const anonymatWithIdOnly = await prisma.anonymat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnonymatCreateManyAndReturnArgs>(args?: SelectSubset<T, AnonymatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnonymatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Anonymat.
     * @param {AnonymatDeleteArgs} args - Arguments to delete one Anonymat.
     * @example
     * // Delete one Anonymat
     * const Anonymat = await prisma.anonymat.delete({
     *   where: {
     *     // ... filter to delete one Anonymat
     *   }
     * })
     * 
     */
    delete<T extends AnonymatDeleteArgs>(args: SelectSubset<T, AnonymatDeleteArgs<ExtArgs>>): Prisma__AnonymatClient<$Result.GetResult<Prisma.$AnonymatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Anonymat.
     * @param {AnonymatUpdateArgs} args - Arguments to update one Anonymat.
     * @example
     * // Update one Anonymat
     * const anonymat = await prisma.anonymat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnonymatUpdateArgs>(args: SelectSubset<T, AnonymatUpdateArgs<ExtArgs>>): Prisma__AnonymatClient<$Result.GetResult<Prisma.$AnonymatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Anonymats.
     * @param {AnonymatDeleteManyArgs} args - Arguments to filter Anonymats to delete.
     * @example
     * // Delete a few Anonymats
     * const { count } = await prisma.anonymat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnonymatDeleteManyArgs>(args?: SelectSubset<T, AnonymatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anonymats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Anonymats
     * const anonymat = await prisma.anonymat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnonymatUpdateManyArgs>(args: SelectSubset<T, AnonymatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anonymats and returns the data updated in the database.
     * @param {AnonymatUpdateManyAndReturnArgs} args - Arguments to update many Anonymats.
     * @example
     * // Update many Anonymats
     * const anonymat = await prisma.anonymat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Anonymats and only return the `id`
     * const anonymatWithIdOnly = await prisma.anonymat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnonymatUpdateManyAndReturnArgs>(args: SelectSubset<T, AnonymatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnonymatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Anonymat.
     * @param {AnonymatUpsertArgs} args - Arguments to update or create a Anonymat.
     * @example
     * // Update or create a Anonymat
     * const anonymat = await prisma.anonymat.upsert({
     *   create: {
     *     // ... data to create a Anonymat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Anonymat we want to update
     *   }
     * })
     */
    upsert<T extends AnonymatUpsertArgs>(args: SelectSubset<T, AnonymatUpsertArgs<ExtArgs>>): Prisma__AnonymatClient<$Result.GetResult<Prisma.$AnonymatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Anonymats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymatCountArgs} args - Arguments to filter Anonymats to count.
     * @example
     * // Count the number of Anonymats
     * const count = await prisma.anonymat.count({
     *   where: {
     *     // ... the filter for the Anonymats we want to count
     *   }
     * })
    **/
    count<T extends AnonymatCountArgs>(
      args?: Subset<T, AnonymatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnonymatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Anonymat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnonymatAggregateArgs>(args: Subset<T, AnonymatAggregateArgs>): Prisma.PrismaPromise<GetAnonymatAggregateType<T>>

    /**
     * Group by Anonymat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnonymatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnonymatGroupByArgs['orderBy'] }
        : { orderBy?: AnonymatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnonymatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnonymatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Anonymat model
   */
  readonly fields: AnonymatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Anonymat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnonymatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidat<T extends CandidatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidatDefaultArgs<ExtArgs>>): Prisma__CandidatClient<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Anonymat model
   */
  interface AnonymatFieldRefs {
    readonly id: FieldRef<"Anonymat", 'Int'>
    readonly code: FieldRef<"Anonymat", 'String'>
    readonly candidatId: FieldRef<"Anonymat", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Anonymat findUnique
   */
  export type AnonymatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anonymat
     */
    select?: AnonymatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anonymat
     */
    omit?: AnonymatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymatInclude<ExtArgs> | null
    /**
     * Filter, which Anonymat to fetch.
     */
    where: AnonymatWhereUniqueInput
  }

  /**
   * Anonymat findUniqueOrThrow
   */
  export type AnonymatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anonymat
     */
    select?: AnonymatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anonymat
     */
    omit?: AnonymatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymatInclude<ExtArgs> | null
    /**
     * Filter, which Anonymat to fetch.
     */
    where: AnonymatWhereUniqueInput
  }

  /**
   * Anonymat findFirst
   */
  export type AnonymatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anonymat
     */
    select?: AnonymatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anonymat
     */
    omit?: AnonymatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymatInclude<ExtArgs> | null
    /**
     * Filter, which Anonymat to fetch.
     */
    where?: AnonymatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anonymats to fetch.
     */
    orderBy?: AnonymatOrderByWithRelationInput | AnonymatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anonymats.
     */
    cursor?: AnonymatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anonymats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anonymats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anonymats.
     */
    distinct?: AnonymatScalarFieldEnum | AnonymatScalarFieldEnum[]
  }

  /**
   * Anonymat findFirstOrThrow
   */
  export type AnonymatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anonymat
     */
    select?: AnonymatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anonymat
     */
    omit?: AnonymatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymatInclude<ExtArgs> | null
    /**
     * Filter, which Anonymat to fetch.
     */
    where?: AnonymatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anonymats to fetch.
     */
    orderBy?: AnonymatOrderByWithRelationInput | AnonymatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anonymats.
     */
    cursor?: AnonymatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anonymats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anonymats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anonymats.
     */
    distinct?: AnonymatScalarFieldEnum | AnonymatScalarFieldEnum[]
  }

  /**
   * Anonymat findMany
   */
  export type AnonymatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anonymat
     */
    select?: AnonymatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anonymat
     */
    omit?: AnonymatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymatInclude<ExtArgs> | null
    /**
     * Filter, which Anonymats to fetch.
     */
    where?: AnonymatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anonymats to fetch.
     */
    orderBy?: AnonymatOrderByWithRelationInput | AnonymatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Anonymats.
     */
    cursor?: AnonymatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anonymats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anonymats.
     */
    skip?: number
    distinct?: AnonymatScalarFieldEnum | AnonymatScalarFieldEnum[]
  }

  /**
   * Anonymat create
   */
  export type AnonymatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anonymat
     */
    select?: AnonymatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anonymat
     */
    omit?: AnonymatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymatInclude<ExtArgs> | null
    /**
     * The data needed to create a Anonymat.
     */
    data: XOR<AnonymatCreateInput, AnonymatUncheckedCreateInput>
  }

  /**
   * Anonymat createMany
   */
  export type AnonymatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Anonymats.
     */
    data: AnonymatCreateManyInput | AnonymatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Anonymat createManyAndReturn
   */
  export type AnonymatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anonymat
     */
    select?: AnonymatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Anonymat
     */
    omit?: AnonymatOmit<ExtArgs> | null
    /**
     * The data used to create many Anonymats.
     */
    data: AnonymatCreateManyInput | AnonymatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Anonymat update
   */
  export type AnonymatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anonymat
     */
    select?: AnonymatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anonymat
     */
    omit?: AnonymatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymatInclude<ExtArgs> | null
    /**
     * The data needed to update a Anonymat.
     */
    data: XOR<AnonymatUpdateInput, AnonymatUncheckedUpdateInput>
    /**
     * Choose, which Anonymat to update.
     */
    where: AnonymatWhereUniqueInput
  }

  /**
   * Anonymat updateMany
   */
  export type AnonymatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Anonymats.
     */
    data: XOR<AnonymatUpdateManyMutationInput, AnonymatUncheckedUpdateManyInput>
    /**
     * Filter which Anonymats to update
     */
    where?: AnonymatWhereInput
    /**
     * Limit how many Anonymats to update.
     */
    limit?: number
  }

  /**
   * Anonymat updateManyAndReturn
   */
  export type AnonymatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anonymat
     */
    select?: AnonymatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Anonymat
     */
    omit?: AnonymatOmit<ExtArgs> | null
    /**
     * The data used to update Anonymats.
     */
    data: XOR<AnonymatUpdateManyMutationInput, AnonymatUncheckedUpdateManyInput>
    /**
     * Filter which Anonymats to update
     */
    where?: AnonymatWhereInput
    /**
     * Limit how many Anonymats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Anonymat upsert
   */
  export type AnonymatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anonymat
     */
    select?: AnonymatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anonymat
     */
    omit?: AnonymatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymatInclude<ExtArgs> | null
    /**
     * The filter to search for the Anonymat to update in case it exists.
     */
    where: AnonymatWhereUniqueInput
    /**
     * In case the Anonymat found by the `where` argument doesn't exist, create a new Anonymat with this data.
     */
    create: XOR<AnonymatCreateInput, AnonymatUncheckedCreateInput>
    /**
     * In case the Anonymat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnonymatUpdateInput, AnonymatUncheckedUpdateInput>
  }

  /**
   * Anonymat delete
   */
  export type AnonymatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anonymat
     */
    select?: AnonymatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anonymat
     */
    omit?: AnonymatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymatInclude<ExtArgs> | null
    /**
     * Filter which Anonymat to delete.
     */
    where: AnonymatWhereUniqueInput
  }

  /**
   * Anonymat deleteMany
   */
  export type AnonymatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anonymats to delete
     */
    where?: AnonymatWhereInput
    /**
     * Limit how many Anonymats to delete.
     */
    limit?: number
  }

  /**
   * Anonymat without action
   */
  export type AnonymatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anonymat
     */
    select?: AnonymatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anonymat
     */
    omit?: AnonymatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymatInclude<ExtArgs> | null
  }


  /**
   * Model Zone
   */

  export type AggregateZone = {
    _count: ZoneCountAggregateOutputType | null
    _avg: ZoneAvgAggregateOutputType | null
    _sum: ZoneSumAggregateOutputType | null
    _min: ZoneMinAggregateOutputType | null
    _max: ZoneMaxAggregateOutputType | null
  }

  export type ZoneAvgAggregateOutputType = {
    id: number | null
  }

  export type ZoneSumAggregateOutputType = {
    id: number | null
  }

  export type ZoneMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    responsable: string | null
    contact: string | null
  }

  export type ZoneMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    responsable: string | null
    contact: string | null
  }

  export type ZoneCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    responsable: number
    contact: number
    _all: number
  }


  export type ZoneAvgAggregateInputType = {
    id?: true
  }

  export type ZoneSumAggregateInputType = {
    id?: true
  }

  export type ZoneMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    responsable?: true
    contact?: true
  }

  export type ZoneMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    responsable?: true
    contact?: true
  }

  export type ZoneCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    responsable?: true
    contact?: true
    _all?: true
  }

  export type ZoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zone to aggregate.
     */
    where?: ZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zones to fetch.
     */
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Zones
    **/
    _count?: true | ZoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZoneMaxAggregateInputType
  }

  export type GetZoneAggregateType<T extends ZoneAggregateArgs> = {
        [P in keyof T & keyof AggregateZone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZone[P]>
      : GetScalarType<T[P], AggregateZone[P]>
  }




  export type ZoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZoneWhereInput
    orderBy?: ZoneOrderByWithAggregationInput | ZoneOrderByWithAggregationInput[]
    by: ZoneScalarFieldEnum[] | ZoneScalarFieldEnum
    having?: ZoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZoneCountAggregateInputType | true
    _avg?: ZoneAvgAggregateInputType
    _sum?: ZoneSumAggregateInputType
    _min?: ZoneMinAggregateInputType
    _max?: ZoneMaxAggregateInputType
  }

  export type ZoneGroupByOutputType = {
    id: number
    name: string
    slug: string
    responsable: string
    contact: string
    _count: ZoneCountAggregateOutputType | null
    _avg: ZoneAvgAggregateOutputType | null
    _sum: ZoneSumAggregateOutputType | null
    _min: ZoneMinAggregateOutputType | null
    _max: ZoneMaxAggregateOutputType | null
  }

  type GetZoneGroupByPayload<T extends ZoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZoneGroupByOutputType[P]>
            : GetScalarType<T[P], ZoneGroupByOutputType[P]>
        }
      >
    >


  export type ZoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    responsable?: boolean
    contact?: boolean
    centres?: boolean | Zone$centresArgs<ExtArgs>
    etablissements?: boolean | Zone$etablissementsArgs<ExtArgs>
    _count?: boolean | ZoneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zone"]>

  export type ZoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    responsable?: boolean
    contact?: boolean
  }, ExtArgs["result"]["zone"]>

  export type ZoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    responsable?: boolean
    contact?: boolean
  }, ExtArgs["result"]["zone"]>

  export type ZoneSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    responsable?: boolean
    contact?: boolean
  }

  export type ZoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "responsable" | "contact", ExtArgs["result"]["zone"]>
  export type ZoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    centres?: boolean | Zone$centresArgs<ExtArgs>
    etablissements?: boolean | Zone$etablissementsArgs<ExtArgs>
    _count?: boolean | ZoneCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ZoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ZoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ZonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Zone"
    objects: {
      centres: Prisma.$CentrePayload<ExtArgs>[]
      etablissements: Prisma.$EtablissementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      responsable: string
      contact: string
    }, ExtArgs["result"]["zone"]>
    composites: {}
  }

  type ZoneGetPayload<S extends boolean | null | undefined | ZoneDefaultArgs> = $Result.GetResult<Prisma.$ZonePayload, S>

  type ZoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZoneCountAggregateInputType | true
    }

  export interface ZoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Zone'], meta: { name: 'Zone' } }
    /**
     * Find zero or one Zone that matches the filter.
     * @param {ZoneFindUniqueArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZoneFindUniqueArgs>(args: SelectSubset<T, ZoneFindUniqueArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Zone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZoneFindUniqueOrThrowArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZoneFindUniqueOrThrowArgs>(args: SelectSubset<T, ZoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneFindFirstArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZoneFindFirstArgs>(args?: SelectSubset<T, ZoneFindFirstArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneFindFirstOrThrowArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZoneFindFirstOrThrowArgs>(args?: SelectSubset<T, ZoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Zones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Zones
     * const zones = await prisma.zone.findMany()
     * 
     * // Get first 10 Zones
     * const zones = await prisma.zone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zoneWithIdOnly = await prisma.zone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZoneFindManyArgs>(args?: SelectSubset<T, ZoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Zone.
     * @param {ZoneCreateArgs} args - Arguments to create a Zone.
     * @example
     * // Create one Zone
     * const Zone = await prisma.zone.create({
     *   data: {
     *     // ... data to create a Zone
     *   }
     * })
     * 
     */
    create<T extends ZoneCreateArgs>(args: SelectSubset<T, ZoneCreateArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Zones.
     * @param {ZoneCreateManyArgs} args - Arguments to create many Zones.
     * @example
     * // Create many Zones
     * const zone = await prisma.zone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZoneCreateManyArgs>(args?: SelectSubset<T, ZoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Zones and returns the data saved in the database.
     * @param {ZoneCreateManyAndReturnArgs} args - Arguments to create many Zones.
     * @example
     * // Create many Zones
     * const zone = await prisma.zone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Zones and only return the `id`
     * const zoneWithIdOnly = await prisma.zone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZoneCreateManyAndReturnArgs>(args?: SelectSubset<T, ZoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Zone.
     * @param {ZoneDeleteArgs} args - Arguments to delete one Zone.
     * @example
     * // Delete one Zone
     * const Zone = await prisma.zone.delete({
     *   where: {
     *     // ... filter to delete one Zone
     *   }
     * })
     * 
     */
    delete<T extends ZoneDeleteArgs>(args: SelectSubset<T, ZoneDeleteArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Zone.
     * @param {ZoneUpdateArgs} args - Arguments to update one Zone.
     * @example
     * // Update one Zone
     * const zone = await prisma.zone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZoneUpdateArgs>(args: SelectSubset<T, ZoneUpdateArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Zones.
     * @param {ZoneDeleteManyArgs} args - Arguments to filter Zones to delete.
     * @example
     * // Delete a few Zones
     * const { count } = await prisma.zone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZoneDeleteManyArgs>(args?: SelectSubset<T, ZoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Zones
     * const zone = await prisma.zone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZoneUpdateManyArgs>(args: SelectSubset<T, ZoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zones and returns the data updated in the database.
     * @param {ZoneUpdateManyAndReturnArgs} args - Arguments to update many Zones.
     * @example
     * // Update many Zones
     * const zone = await prisma.zone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Zones and only return the `id`
     * const zoneWithIdOnly = await prisma.zone.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ZoneUpdateManyAndReturnArgs>(args: SelectSubset<T, ZoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Zone.
     * @param {ZoneUpsertArgs} args - Arguments to update or create a Zone.
     * @example
     * // Update or create a Zone
     * const zone = await prisma.zone.upsert({
     *   create: {
     *     // ... data to create a Zone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Zone we want to update
     *   }
     * })
     */
    upsert<T extends ZoneUpsertArgs>(args: SelectSubset<T, ZoneUpsertArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Zones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneCountArgs} args - Arguments to filter Zones to count.
     * @example
     * // Count the number of Zones
     * const count = await prisma.zone.count({
     *   where: {
     *     // ... the filter for the Zones we want to count
     *   }
     * })
    **/
    count<T extends ZoneCountArgs>(
      args?: Subset<T, ZoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Zone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZoneAggregateArgs>(args: Subset<T, ZoneAggregateArgs>): Prisma.PrismaPromise<GetZoneAggregateType<T>>

    /**
     * Group by Zone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZoneGroupByArgs['orderBy'] }
        : { orderBy?: ZoneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Zone model
   */
  readonly fields: ZoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Zone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    centres<T extends Zone$centresArgs<ExtArgs> = {}>(args?: Subset<T, Zone$centresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CentrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    etablissements<T extends Zone$etablissementsArgs<ExtArgs> = {}>(args?: Subset<T, Zone$etablissementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Zone model
   */
  interface ZoneFieldRefs {
    readonly id: FieldRef<"Zone", 'Int'>
    readonly name: FieldRef<"Zone", 'String'>
    readonly slug: FieldRef<"Zone", 'String'>
    readonly responsable: FieldRef<"Zone", 'String'>
    readonly contact: FieldRef<"Zone", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Zone findUnique
   */
  export type ZoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zone to fetch.
     */
    where: ZoneWhereUniqueInput
  }

  /**
   * Zone findUniqueOrThrow
   */
  export type ZoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zone to fetch.
     */
    where: ZoneWhereUniqueInput
  }

  /**
   * Zone findFirst
   */
  export type ZoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zone to fetch.
     */
    where?: ZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zones to fetch.
     */
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zones.
     */
    cursor?: ZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zones.
     */
    distinct?: ZoneScalarFieldEnum | ZoneScalarFieldEnum[]
  }

  /**
   * Zone findFirstOrThrow
   */
  export type ZoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zone to fetch.
     */
    where?: ZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zones to fetch.
     */
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zones.
     */
    cursor?: ZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zones.
     */
    distinct?: ZoneScalarFieldEnum | ZoneScalarFieldEnum[]
  }

  /**
   * Zone findMany
   */
  export type ZoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zones to fetch.
     */
    where?: ZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zones to fetch.
     */
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Zones.
     */
    cursor?: ZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zones.
     */
    skip?: number
    distinct?: ZoneScalarFieldEnum | ZoneScalarFieldEnum[]
  }

  /**
   * Zone create
   */
  export type ZoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Zone.
     */
    data: XOR<ZoneCreateInput, ZoneUncheckedCreateInput>
  }

  /**
   * Zone createMany
   */
  export type ZoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Zones.
     */
    data: ZoneCreateManyInput | ZoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Zone createManyAndReturn
   */
  export type ZoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * The data used to create many Zones.
     */
    data: ZoneCreateManyInput | ZoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Zone update
   */
  export type ZoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Zone.
     */
    data: XOR<ZoneUpdateInput, ZoneUncheckedUpdateInput>
    /**
     * Choose, which Zone to update.
     */
    where: ZoneWhereUniqueInput
  }

  /**
   * Zone updateMany
   */
  export type ZoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Zones.
     */
    data: XOR<ZoneUpdateManyMutationInput, ZoneUncheckedUpdateManyInput>
    /**
     * Filter which Zones to update
     */
    where?: ZoneWhereInput
    /**
     * Limit how many Zones to update.
     */
    limit?: number
  }

  /**
   * Zone updateManyAndReturn
   */
  export type ZoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * The data used to update Zones.
     */
    data: XOR<ZoneUpdateManyMutationInput, ZoneUncheckedUpdateManyInput>
    /**
     * Filter which Zones to update
     */
    where?: ZoneWhereInput
    /**
     * Limit how many Zones to update.
     */
    limit?: number
  }

  /**
   * Zone upsert
   */
  export type ZoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Zone to update in case it exists.
     */
    where: ZoneWhereUniqueInput
    /**
     * In case the Zone found by the `where` argument doesn't exist, create a new Zone with this data.
     */
    create: XOR<ZoneCreateInput, ZoneUncheckedCreateInput>
    /**
     * In case the Zone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZoneUpdateInput, ZoneUncheckedUpdateInput>
  }

  /**
   * Zone delete
   */
  export type ZoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter which Zone to delete.
     */
    where: ZoneWhereUniqueInput
  }

  /**
   * Zone deleteMany
   */
  export type ZoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zones to delete
     */
    where?: ZoneWhereInput
    /**
     * Limit how many Zones to delete.
     */
    limit?: number
  }

  /**
   * Zone.centres
   */
  export type Zone$centresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CentreInclude<ExtArgs> | null
    where?: CentreWhereInput
    orderBy?: CentreOrderByWithRelationInput | CentreOrderByWithRelationInput[]
    cursor?: CentreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CentreScalarFieldEnum | CentreScalarFieldEnum[]
  }

  /**
   * Zone.etablissements
   */
  export type Zone$etablissementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    where?: EtablissementWhereInput
    orderBy?: EtablissementOrderByWithRelationInput | EtablissementOrderByWithRelationInput[]
    cursor?: EtablissementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EtablissementScalarFieldEnum | EtablissementScalarFieldEnum[]
  }

  /**
   * Zone without action
   */
  export type ZoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
  }


  /**
   * Model Centre
   */

  export type AggregateCentre = {
    _count: CentreCountAggregateOutputType | null
    _avg: CentreAvgAggregateOutputType | null
    _sum: CentreSumAggregateOutputType | null
    _min: CentreMinAggregateOutputType | null
    _max: CentreMaxAggregateOutputType | null
  }

  export type CentreAvgAggregateOutputType = {
    id: number | null
    zoneId: number | null
  }

  export type CentreSumAggregateOutputType = {
    id: number | null
    zoneId: number | null
  }

  export type CentreMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    contact: string | null
    zoneId: number | null
  }

  export type CentreMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    contact: string | null
    zoneId: number | null
  }

  export type CentreCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    contact: number
    zoneId: number
    _all: number
  }


  export type CentreAvgAggregateInputType = {
    id?: true
    zoneId?: true
  }

  export type CentreSumAggregateInputType = {
    id?: true
    zoneId?: true
  }

  export type CentreMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    contact?: true
    zoneId?: true
  }

  export type CentreMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    contact?: true
    zoneId?: true
  }

  export type CentreCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    contact?: true
    zoneId?: true
    _all?: true
  }

  export type CentreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Centre to aggregate.
     */
    where?: CentreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Centres to fetch.
     */
    orderBy?: CentreOrderByWithRelationInput | CentreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CentreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Centres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Centres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Centres
    **/
    _count?: true | CentreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CentreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CentreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CentreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CentreMaxAggregateInputType
  }

  export type GetCentreAggregateType<T extends CentreAggregateArgs> = {
        [P in keyof T & keyof AggregateCentre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCentre[P]>
      : GetScalarType<T[P], AggregateCentre[P]>
  }




  export type CentreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CentreWhereInput
    orderBy?: CentreOrderByWithAggregationInput | CentreOrderByWithAggregationInput[]
    by: CentreScalarFieldEnum[] | CentreScalarFieldEnum
    having?: CentreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CentreCountAggregateInputType | true
    _avg?: CentreAvgAggregateInputType
    _sum?: CentreSumAggregateInputType
    _min?: CentreMinAggregateInputType
    _max?: CentreMaxAggregateInputType
  }

  export type CentreGroupByOutputType = {
    id: number
    name: string | null
    slug: string | null
    contact: string | null
    zoneId: number
    _count: CentreCountAggregateOutputType | null
    _avg: CentreAvgAggregateOutputType | null
    _sum: CentreSumAggregateOutputType | null
    _min: CentreMinAggregateOutputType | null
    _max: CentreMaxAggregateOutputType | null
  }

  type GetCentreGroupByPayload<T extends CentreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CentreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CentreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CentreGroupByOutputType[P]>
            : GetScalarType<T[P], CentreGroupByOutputType[P]>
        }
      >
    >


  export type CentreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    contact?: boolean
    zoneId?: boolean
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
    jurys?: boolean | Centre$jurysArgs<ExtArgs>
    _count?: boolean | CentreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["centre"]>

  export type CentreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    contact?: boolean
    zoneId?: boolean
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["centre"]>

  export type CentreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    contact?: boolean
    zoneId?: boolean
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["centre"]>

  export type CentreSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    contact?: boolean
    zoneId?: boolean
  }

  export type CentreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "contact" | "zoneId", ExtArgs["result"]["centre"]>
  export type CentreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
    jurys?: boolean | Centre$jurysArgs<ExtArgs>
    _count?: boolean | CentreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CentreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }
  export type CentreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }

  export type $CentrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Centre"
    objects: {
      zone: Prisma.$ZonePayload<ExtArgs>
      jurys: Prisma.$JuryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      slug: string | null
      contact: string | null
      zoneId: number
    }, ExtArgs["result"]["centre"]>
    composites: {}
  }

  type CentreGetPayload<S extends boolean | null | undefined | CentreDefaultArgs> = $Result.GetResult<Prisma.$CentrePayload, S>

  type CentreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CentreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CentreCountAggregateInputType | true
    }

  export interface CentreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Centre'], meta: { name: 'Centre' } }
    /**
     * Find zero or one Centre that matches the filter.
     * @param {CentreFindUniqueArgs} args - Arguments to find a Centre
     * @example
     * // Get one Centre
     * const centre = await prisma.centre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CentreFindUniqueArgs>(args: SelectSubset<T, CentreFindUniqueArgs<ExtArgs>>): Prisma__CentreClient<$Result.GetResult<Prisma.$CentrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Centre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CentreFindUniqueOrThrowArgs} args - Arguments to find a Centre
     * @example
     * // Get one Centre
     * const centre = await prisma.centre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CentreFindUniqueOrThrowArgs>(args: SelectSubset<T, CentreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CentreClient<$Result.GetResult<Prisma.$CentrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Centre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentreFindFirstArgs} args - Arguments to find a Centre
     * @example
     * // Get one Centre
     * const centre = await prisma.centre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CentreFindFirstArgs>(args?: SelectSubset<T, CentreFindFirstArgs<ExtArgs>>): Prisma__CentreClient<$Result.GetResult<Prisma.$CentrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Centre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentreFindFirstOrThrowArgs} args - Arguments to find a Centre
     * @example
     * // Get one Centre
     * const centre = await prisma.centre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CentreFindFirstOrThrowArgs>(args?: SelectSubset<T, CentreFindFirstOrThrowArgs<ExtArgs>>): Prisma__CentreClient<$Result.GetResult<Prisma.$CentrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Centres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Centres
     * const centres = await prisma.centre.findMany()
     * 
     * // Get first 10 Centres
     * const centres = await prisma.centre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const centreWithIdOnly = await prisma.centre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CentreFindManyArgs>(args?: SelectSubset<T, CentreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CentrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Centre.
     * @param {CentreCreateArgs} args - Arguments to create a Centre.
     * @example
     * // Create one Centre
     * const Centre = await prisma.centre.create({
     *   data: {
     *     // ... data to create a Centre
     *   }
     * })
     * 
     */
    create<T extends CentreCreateArgs>(args: SelectSubset<T, CentreCreateArgs<ExtArgs>>): Prisma__CentreClient<$Result.GetResult<Prisma.$CentrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Centres.
     * @param {CentreCreateManyArgs} args - Arguments to create many Centres.
     * @example
     * // Create many Centres
     * const centre = await prisma.centre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CentreCreateManyArgs>(args?: SelectSubset<T, CentreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Centres and returns the data saved in the database.
     * @param {CentreCreateManyAndReturnArgs} args - Arguments to create many Centres.
     * @example
     * // Create many Centres
     * const centre = await prisma.centre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Centres and only return the `id`
     * const centreWithIdOnly = await prisma.centre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CentreCreateManyAndReturnArgs>(args?: SelectSubset<T, CentreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CentrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Centre.
     * @param {CentreDeleteArgs} args - Arguments to delete one Centre.
     * @example
     * // Delete one Centre
     * const Centre = await prisma.centre.delete({
     *   where: {
     *     // ... filter to delete one Centre
     *   }
     * })
     * 
     */
    delete<T extends CentreDeleteArgs>(args: SelectSubset<T, CentreDeleteArgs<ExtArgs>>): Prisma__CentreClient<$Result.GetResult<Prisma.$CentrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Centre.
     * @param {CentreUpdateArgs} args - Arguments to update one Centre.
     * @example
     * // Update one Centre
     * const centre = await prisma.centre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CentreUpdateArgs>(args: SelectSubset<T, CentreUpdateArgs<ExtArgs>>): Prisma__CentreClient<$Result.GetResult<Prisma.$CentrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Centres.
     * @param {CentreDeleteManyArgs} args - Arguments to filter Centres to delete.
     * @example
     * // Delete a few Centres
     * const { count } = await prisma.centre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CentreDeleteManyArgs>(args?: SelectSubset<T, CentreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Centres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Centres
     * const centre = await prisma.centre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CentreUpdateManyArgs>(args: SelectSubset<T, CentreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Centres and returns the data updated in the database.
     * @param {CentreUpdateManyAndReturnArgs} args - Arguments to update many Centres.
     * @example
     * // Update many Centres
     * const centre = await prisma.centre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Centres and only return the `id`
     * const centreWithIdOnly = await prisma.centre.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CentreUpdateManyAndReturnArgs>(args: SelectSubset<T, CentreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CentrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Centre.
     * @param {CentreUpsertArgs} args - Arguments to update or create a Centre.
     * @example
     * // Update or create a Centre
     * const centre = await prisma.centre.upsert({
     *   create: {
     *     // ... data to create a Centre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Centre we want to update
     *   }
     * })
     */
    upsert<T extends CentreUpsertArgs>(args: SelectSubset<T, CentreUpsertArgs<ExtArgs>>): Prisma__CentreClient<$Result.GetResult<Prisma.$CentrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Centres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentreCountArgs} args - Arguments to filter Centres to count.
     * @example
     * // Count the number of Centres
     * const count = await prisma.centre.count({
     *   where: {
     *     // ... the filter for the Centres we want to count
     *   }
     * })
    **/
    count<T extends CentreCountArgs>(
      args?: Subset<T, CentreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CentreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Centre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CentreAggregateArgs>(args: Subset<T, CentreAggregateArgs>): Prisma.PrismaPromise<GetCentreAggregateType<T>>

    /**
     * Group by Centre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CentreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CentreGroupByArgs['orderBy'] }
        : { orderBy?: CentreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CentreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCentreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Centre model
   */
  readonly fields: CentreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Centre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CentreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zone<T extends ZoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZoneDefaultArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jurys<T extends Centre$jurysArgs<ExtArgs> = {}>(args?: Subset<T, Centre$jurysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Centre model
   */
  interface CentreFieldRefs {
    readonly id: FieldRef<"Centre", 'Int'>
    readonly name: FieldRef<"Centre", 'String'>
    readonly slug: FieldRef<"Centre", 'String'>
    readonly contact: FieldRef<"Centre", 'String'>
    readonly zoneId: FieldRef<"Centre", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Centre findUnique
   */
  export type CentreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CentreInclude<ExtArgs> | null
    /**
     * Filter, which Centre to fetch.
     */
    where: CentreWhereUniqueInput
  }

  /**
   * Centre findUniqueOrThrow
   */
  export type CentreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CentreInclude<ExtArgs> | null
    /**
     * Filter, which Centre to fetch.
     */
    where: CentreWhereUniqueInput
  }

  /**
   * Centre findFirst
   */
  export type CentreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CentreInclude<ExtArgs> | null
    /**
     * Filter, which Centre to fetch.
     */
    where?: CentreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Centres to fetch.
     */
    orderBy?: CentreOrderByWithRelationInput | CentreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Centres.
     */
    cursor?: CentreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Centres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Centres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Centres.
     */
    distinct?: CentreScalarFieldEnum | CentreScalarFieldEnum[]
  }

  /**
   * Centre findFirstOrThrow
   */
  export type CentreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CentreInclude<ExtArgs> | null
    /**
     * Filter, which Centre to fetch.
     */
    where?: CentreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Centres to fetch.
     */
    orderBy?: CentreOrderByWithRelationInput | CentreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Centres.
     */
    cursor?: CentreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Centres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Centres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Centres.
     */
    distinct?: CentreScalarFieldEnum | CentreScalarFieldEnum[]
  }

  /**
   * Centre findMany
   */
  export type CentreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CentreInclude<ExtArgs> | null
    /**
     * Filter, which Centres to fetch.
     */
    where?: CentreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Centres to fetch.
     */
    orderBy?: CentreOrderByWithRelationInput | CentreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Centres.
     */
    cursor?: CentreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Centres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Centres.
     */
    skip?: number
    distinct?: CentreScalarFieldEnum | CentreScalarFieldEnum[]
  }

  /**
   * Centre create
   */
  export type CentreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CentreInclude<ExtArgs> | null
    /**
     * The data needed to create a Centre.
     */
    data: XOR<CentreCreateInput, CentreUncheckedCreateInput>
  }

  /**
   * Centre createMany
   */
  export type CentreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Centres.
     */
    data: CentreCreateManyInput | CentreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Centre createManyAndReturn
   */
  export type CentreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
    /**
     * The data used to create many Centres.
     */
    data: CentreCreateManyInput | CentreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CentreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Centre update
   */
  export type CentreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CentreInclude<ExtArgs> | null
    /**
     * The data needed to update a Centre.
     */
    data: XOR<CentreUpdateInput, CentreUncheckedUpdateInput>
    /**
     * Choose, which Centre to update.
     */
    where: CentreWhereUniqueInput
  }

  /**
   * Centre updateMany
   */
  export type CentreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Centres.
     */
    data: XOR<CentreUpdateManyMutationInput, CentreUncheckedUpdateManyInput>
    /**
     * Filter which Centres to update
     */
    where?: CentreWhereInput
    /**
     * Limit how many Centres to update.
     */
    limit?: number
  }

  /**
   * Centre updateManyAndReturn
   */
  export type CentreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
    /**
     * The data used to update Centres.
     */
    data: XOR<CentreUpdateManyMutationInput, CentreUncheckedUpdateManyInput>
    /**
     * Filter which Centres to update
     */
    where?: CentreWhereInput
    /**
     * Limit how many Centres to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CentreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Centre upsert
   */
  export type CentreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CentreInclude<ExtArgs> | null
    /**
     * The filter to search for the Centre to update in case it exists.
     */
    where: CentreWhereUniqueInput
    /**
     * In case the Centre found by the `where` argument doesn't exist, create a new Centre with this data.
     */
    create: XOR<CentreCreateInput, CentreUncheckedCreateInput>
    /**
     * In case the Centre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CentreUpdateInput, CentreUncheckedUpdateInput>
  }

  /**
   * Centre delete
   */
  export type CentreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CentreInclude<ExtArgs> | null
    /**
     * Filter which Centre to delete.
     */
    where: CentreWhereUniqueInput
  }

  /**
   * Centre deleteMany
   */
  export type CentreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Centres to delete
     */
    where?: CentreWhereInput
    /**
     * Limit how many Centres to delete.
     */
    limit?: number
  }

  /**
   * Centre.jurys
   */
  export type Centre$jurysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jury
     */
    select?: JurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jury
     */
    omit?: JuryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuryInclude<ExtArgs> | null
    where?: JuryWhereInput
    orderBy?: JuryOrderByWithRelationInput | JuryOrderByWithRelationInput[]
    cursor?: JuryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JuryScalarFieldEnum | JuryScalarFieldEnum[]
  }

  /**
   * Centre without action
   */
  export type CentreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CentreInclude<ExtArgs> | null
  }


  /**
   * Model Etablissement
   */

  export type AggregateEtablissement = {
    _count: EtablissementCountAggregateOutputType | null
    _avg: EtablissementAvgAggregateOutputType | null
    _sum: EtablissementSumAggregateOutputType | null
    _min: EtablissementMinAggregateOutputType | null
    _max: EtablissementMaxAggregateOutputType | null
  }

  export type EtablissementAvgAggregateOutputType = {
    id: number | null
    zoneId: number | null
  }

  export type EtablissementSumAggregateOutputType = {
    id: number | null
    zoneId: number | null
  }

  export type EtablissementMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    zoneId: number | null
  }

  export type EtablissementMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    zoneId: number | null
  }

  export type EtablissementCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    zoneId: number
    _all: number
  }


  export type EtablissementAvgAggregateInputType = {
    id?: true
    zoneId?: true
  }

  export type EtablissementSumAggregateInputType = {
    id?: true
    zoneId?: true
  }

  export type EtablissementMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    zoneId?: true
  }

  export type EtablissementMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    zoneId?: true
  }

  export type EtablissementCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    zoneId?: true
    _all?: true
  }

  export type EtablissementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etablissement to aggregate.
     */
    where?: EtablissementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etablissements to fetch.
     */
    orderBy?: EtablissementOrderByWithRelationInput | EtablissementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EtablissementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etablissements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etablissements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Etablissements
    **/
    _count?: true | EtablissementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EtablissementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EtablissementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EtablissementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EtablissementMaxAggregateInputType
  }

  export type GetEtablissementAggregateType<T extends EtablissementAggregateArgs> = {
        [P in keyof T & keyof AggregateEtablissement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEtablissement[P]>
      : GetScalarType<T[P], AggregateEtablissement[P]>
  }




  export type EtablissementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtablissementWhereInput
    orderBy?: EtablissementOrderByWithAggregationInput | EtablissementOrderByWithAggregationInput[]
    by: EtablissementScalarFieldEnum[] | EtablissementScalarFieldEnum
    having?: EtablissementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EtablissementCountAggregateInputType | true
    _avg?: EtablissementAvgAggregateInputType
    _sum?: EtablissementSumAggregateInputType
    _min?: EtablissementMinAggregateInputType
    _max?: EtablissementMaxAggregateInputType
  }

  export type EtablissementGroupByOutputType = {
    id: number
    name: string
    slug: string
    zoneId: number
    _count: EtablissementCountAggregateOutputType | null
    _avg: EtablissementAvgAggregateOutputType | null
    _sum: EtablissementSumAggregateOutputType | null
    _min: EtablissementMinAggregateOutputType | null
    _max: EtablissementMaxAggregateOutputType | null
  }

  type GetEtablissementGroupByPayload<T extends EtablissementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EtablissementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EtablissementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EtablissementGroupByOutputType[P]>
            : GetScalarType<T[P], EtablissementGroupByOutputType[P]>
        }
      >
    >


  export type EtablissementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    zoneId?: boolean
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
    candidats?: boolean | Etablissement$candidatsArgs<ExtArgs>
    _count?: boolean | EtablissementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["etablissement"]>

  export type EtablissementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    zoneId?: boolean
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["etablissement"]>

  export type EtablissementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    zoneId?: boolean
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["etablissement"]>

  export type EtablissementSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    zoneId?: boolean
  }

  export type EtablissementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "zoneId", ExtArgs["result"]["etablissement"]>
  export type EtablissementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
    candidats?: boolean | Etablissement$candidatsArgs<ExtArgs>
    _count?: boolean | EtablissementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EtablissementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }
  export type EtablissementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }

  export type $EtablissementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Etablissement"
    objects: {
      zone: Prisma.$ZonePayload<ExtArgs>
      candidats: Prisma.$CandidatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      zoneId: number
    }, ExtArgs["result"]["etablissement"]>
    composites: {}
  }

  type EtablissementGetPayload<S extends boolean | null | undefined | EtablissementDefaultArgs> = $Result.GetResult<Prisma.$EtablissementPayload, S>

  type EtablissementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EtablissementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EtablissementCountAggregateInputType | true
    }

  export interface EtablissementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Etablissement'], meta: { name: 'Etablissement' } }
    /**
     * Find zero or one Etablissement that matches the filter.
     * @param {EtablissementFindUniqueArgs} args - Arguments to find a Etablissement
     * @example
     * // Get one Etablissement
     * const etablissement = await prisma.etablissement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EtablissementFindUniqueArgs>(args: SelectSubset<T, EtablissementFindUniqueArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Etablissement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EtablissementFindUniqueOrThrowArgs} args - Arguments to find a Etablissement
     * @example
     * // Get one Etablissement
     * const etablissement = await prisma.etablissement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EtablissementFindUniqueOrThrowArgs>(args: SelectSubset<T, EtablissementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etablissement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementFindFirstArgs} args - Arguments to find a Etablissement
     * @example
     * // Get one Etablissement
     * const etablissement = await prisma.etablissement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EtablissementFindFirstArgs>(args?: SelectSubset<T, EtablissementFindFirstArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etablissement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementFindFirstOrThrowArgs} args - Arguments to find a Etablissement
     * @example
     * // Get one Etablissement
     * const etablissement = await prisma.etablissement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EtablissementFindFirstOrThrowArgs>(args?: SelectSubset<T, EtablissementFindFirstOrThrowArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Etablissements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Etablissements
     * const etablissements = await prisma.etablissement.findMany()
     * 
     * // Get first 10 Etablissements
     * const etablissements = await prisma.etablissement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const etablissementWithIdOnly = await prisma.etablissement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EtablissementFindManyArgs>(args?: SelectSubset<T, EtablissementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Etablissement.
     * @param {EtablissementCreateArgs} args - Arguments to create a Etablissement.
     * @example
     * // Create one Etablissement
     * const Etablissement = await prisma.etablissement.create({
     *   data: {
     *     // ... data to create a Etablissement
     *   }
     * })
     * 
     */
    create<T extends EtablissementCreateArgs>(args: SelectSubset<T, EtablissementCreateArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Etablissements.
     * @param {EtablissementCreateManyArgs} args - Arguments to create many Etablissements.
     * @example
     * // Create many Etablissements
     * const etablissement = await prisma.etablissement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EtablissementCreateManyArgs>(args?: SelectSubset<T, EtablissementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Etablissements and returns the data saved in the database.
     * @param {EtablissementCreateManyAndReturnArgs} args - Arguments to create many Etablissements.
     * @example
     * // Create many Etablissements
     * const etablissement = await prisma.etablissement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Etablissements and only return the `id`
     * const etablissementWithIdOnly = await prisma.etablissement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EtablissementCreateManyAndReturnArgs>(args?: SelectSubset<T, EtablissementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Etablissement.
     * @param {EtablissementDeleteArgs} args - Arguments to delete one Etablissement.
     * @example
     * // Delete one Etablissement
     * const Etablissement = await prisma.etablissement.delete({
     *   where: {
     *     // ... filter to delete one Etablissement
     *   }
     * })
     * 
     */
    delete<T extends EtablissementDeleteArgs>(args: SelectSubset<T, EtablissementDeleteArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Etablissement.
     * @param {EtablissementUpdateArgs} args - Arguments to update one Etablissement.
     * @example
     * // Update one Etablissement
     * const etablissement = await prisma.etablissement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EtablissementUpdateArgs>(args: SelectSubset<T, EtablissementUpdateArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Etablissements.
     * @param {EtablissementDeleteManyArgs} args - Arguments to filter Etablissements to delete.
     * @example
     * // Delete a few Etablissements
     * const { count } = await prisma.etablissement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EtablissementDeleteManyArgs>(args?: SelectSubset<T, EtablissementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Etablissements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Etablissements
     * const etablissement = await prisma.etablissement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EtablissementUpdateManyArgs>(args: SelectSubset<T, EtablissementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Etablissements and returns the data updated in the database.
     * @param {EtablissementUpdateManyAndReturnArgs} args - Arguments to update many Etablissements.
     * @example
     * // Update many Etablissements
     * const etablissement = await prisma.etablissement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Etablissements and only return the `id`
     * const etablissementWithIdOnly = await prisma.etablissement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EtablissementUpdateManyAndReturnArgs>(args: SelectSubset<T, EtablissementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Etablissement.
     * @param {EtablissementUpsertArgs} args - Arguments to update or create a Etablissement.
     * @example
     * // Update or create a Etablissement
     * const etablissement = await prisma.etablissement.upsert({
     *   create: {
     *     // ... data to create a Etablissement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Etablissement we want to update
     *   }
     * })
     */
    upsert<T extends EtablissementUpsertArgs>(args: SelectSubset<T, EtablissementUpsertArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Etablissements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementCountArgs} args - Arguments to filter Etablissements to count.
     * @example
     * // Count the number of Etablissements
     * const count = await prisma.etablissement.count({
     *   where: {
     *     // ... the filter for the Etablissements we want to count
     *   }
     * })
    **/
    count<T extends EtablissementCountArgs>(
      args?: Subset<T, EtablissementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EtablissementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Etablissement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EtablissementAggregateArgs>(args: Subset<T, EtablissementAggregateArgs>): Prisma.PrismaPromise<GetEtablissementAggregateType<T>>

    /**
     * Group by Etablissement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EtablissementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EtablissementGroupByArgs['orderBy'] }
        : { orderBy?: EtablissementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EtablissementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEtablissementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Etablissement model
   */
  readonly fields: EtablissementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Etablissement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EtablissementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zone<T extends ZoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZoneDefaultArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    candidats<T extends Etablissement$candidatsArgs<ExtArgs> = {}>(args?: Subset<T, Etablissement$candidatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Etablissement model
   */
  interface EtablissementFieldRefs {
    readonly id: FieldRef<"Etablissement", 'Int'>
    readonly name: FieldRef<"Etablissement", 'String'>
    readonly slug: FieldRef<"Etablissement", 'String'>
    readonly zoneId: FieldRef<"Etablissement", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Etablissement findUnique
   */
  export type EtablissementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * Filter, which Etablissement to fetch.
     */
    where: EtablissementWhereUniqueInput
  }

  /**
   * Etablissement findUniqueOrThrow
   */
  export type EtablissementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * Filter, which Etablissement to fetch.
     */
    where: EtablissementWhereUniqueInput
  }

  /**
   * Etablissement findFirst
   */
  export type EtablissementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * Filter, which Etablissement to fetch.
     */
    where?: EtablissementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etablissements to fetch.
     */
    orderBy?: EtablissementOrderByWithRelationInput | EtablissementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etablissements.
     */
    cursor?: EtablissementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etablissements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etablissements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etablissements.
     */
    distinct?: EtablissementScalarFieldEnum | EtablissementScalarFieldEnum[]
  }

  /**
   * Etablissement findFirstOrThrow
   */
  export type EtablissementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * Filter, which Etablissement to fetch.
     */
    where?: EtablissementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etablissements to fetch.
     */
    orderBy?: EtablissementOrderByWithRelationInput | EtablissementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etablissements.
     */
    cursor?: EtablissementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etablissements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etablissements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etablissements.
     */
    distinct?: EtablissementScalarFieldEnum | EtablissementScalarFieldEnum[]
  }

  /**
   * Etablissement findMany
   */
  export type EtablissementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * Filter, which Etablissements to fetch.
     */
    where?: EtablissementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etablissements to fetch.
     */
    orderBy?: EtablissementOrderByWithRelationInput | EtablissementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Etablissements.
     */
    cursor?: EtablissementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etablissements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etablissements.
     */
    skip?: number
    distinct?: EtablissementScalarFieldEnum | EtablissementScalarFieldEnum[]
  }

  /**
   * Etablissement create
   */
  export type EtablissementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * The data needed to create a Etablissement.
     */
    data: XOR<EtablissementCreateInput, EtablissementUncheckedCreateInput>
  }

  /**
   * Etablissement createMany
   */
  export type EtablissementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Etablissements.
     */
    data: EtablissementCreateManyInput | EtablissementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Etablissement createManyAndReturn
   */
  export type EtablissementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * The data used to create many Etablissements.
     */
    data: EtablissementCreateManyInput | EtablissementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Etablissement update
   */
  export type EtablissementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * The data needed to update a Etablissement.
     */
    data: XOR<EtablissementUpdateInput, EtablissementUncheckedUpdateInput>
    /**
     * Choose, which Etablissement to update.
     */
    where: EtablissementWhereUniqueInput
  }

  /**
   * Etablissement updateMany
   */
  export type EtablissementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Etablissements.
     */
    data: XOR<EtablissementUpdateManyMutationInput, EtablissementUncheckedUpdateManyInput>
    /**
     * Filter which Etablissements to update
     */
    where?: EtablissementWhereInput
    /**
     * Limit how many Etablissements to update.
     */
    limit?: number
  }

  /**
   * Etablissement updateManyAndReturn
   */
  export type EtablissementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * The data used to update Etablissements.
     */
    data: XOR<EtablissementUpdateManyMutationInput, EtablissementUncheckedUpdateManyInput>
    /**
     * Filter which Etablissements to update
     */
    where?: EtablissementWhereInput
    /**
     * Limit how many Etablissements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Etablissement upsert
   */
  export type EtablissementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * The filter to search for the Etablissement to update in case it exists.
     */
    where: EtablissementWhereUniqueInput
    /**
     * In case the Etablissement found by the `where` argument doesn't exist, create a new Etablissement with this data.
     */
    create: XOR<EtablissementCreateInput, EtablissementUncheckedCreateInput>
    /**
     * In case the Etablissement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EtablissementUpdateInput, EtablissementUncheckedUpdateInput>
  }

  /**
   * Etablissement delete
   */
  export type EtablissementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * Filter which Etablissement to delete.
     */
    where: EtablissementWhereUniqueInput
  }

  /**
   * Etablissement deleteMany
   */
  export type EtablissementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etablissements to delete
     */
    where?: EtablissementWhereInput
    /**
     * Limit how many Etablissements to delete.
     */
    limit?: number
  }

  /**
   * Etablissement.candidats
   */
  export type Etablissement$candidatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatInclude<ExtArgs> | null
    where?: CandidatWhereInput
    orderBy?: CandidatOrderByWithRelationInput | CandidatOrderByWithRelationInput[]
    cursor?: CandidatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidatScalarFieldEnum | CandidatScalarFieldEnum[]
  }

  /**
   * Etablissement without action
   */
  export type EtablissementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
  }


  /**
   * Model Groupe
   */

  export type AggregateGroupe = {
    _count: GroupeCountAggregateOutputType | null
    _avg: GroupeAvgAggregateOutputType | null
    _sum: GroupeSumAggregateOutputType | null
    _min: GroupeMinAggregateOutputType | null
    _max: GroupeMaxAggregateOutputType | null
  }

  export type GroupeAvgAggregateOutputType = {
    id: number | null
    total: number | null
  }

  export type GroupeSumAggregateOutputType = {
    id: number | null
    total: number | null
  }

  export type GroupeMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    total: number | null
  }

  export type GroupeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    total: number | null
  }

  export type GroupeCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    total: number
    _all: number
  }


  export type GroupeAvgAggregateInputType = {
    id?: true
    total?: true
  }

  export type GroupeSumAggregateInputType = {
    id?: true
    total?: true
  }

  export type GroupeMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    total?: true
  }

  export type GroupeMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    total?: true
  }

  export type GroupeCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    total?: true
    _all?: true
  }

  export type GroupeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groupe to aggregate.
     */
    where?: GroupeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groupes to fetch.
     */
    orderBy?: GroupeOrderByWithRelationInput | GroupeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groupes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groupes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groupes
    **/
    _count?: true | GroupeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupeMaxAggregateInputType
  }

  export type GetGroupeAggregateType<T extends GroupeAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupe[P]>
      : GetScalarType<T[P], AggregateGroupe[P]>
  }




  export type GroupeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupeWhereInput
    orderBy?: GroupeOrderByWithAggregationInput | GroupeOrderByWithAggregationInput[]
    by: GroupeScalarFieldEnum[] | GroupeScalarFieldEnum
    having?: GroupeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupeCountAggregateInputType | true
    _avg?: GroupeAvgAggregateInputType
    _sum?: GroupeSumAggregateInputType
    _min?: GroupeMinAggregateInputType
    _max?: GroupeMaxAggregateInputType
  }

  export type GroupeGroupByOutputType = {
    id: number
    name: string
    slug: string
    total: number
    _count: GroupeCountAggregateOutputType | null
    _avg: GroupeAvgAggregateOutputType | null
    _sum: GroupeSumAggregateOutputType | null
    _min: GroupeMinAggregateOutputType | null
    _max: GroupeMaxAggregateOutputType | null
  }

  type GetGroupeGroupByPayload<T extends GroupeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupeGroupByOutputType[P]>
            : GetScalarType<T[P], GroupeGroupByOutputType[P]>
        }
      >
    >


  export type GroupeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    total?: boolean
  }, ExtArgs["result"]["groupe"]>

  export type GroupeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    total?: boolean
  }, ExtArgs["result"]["groupe"]>

  export type GroupeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    total?: boolean
  }, ExtArgs["result"]["groupe"]>

  export type GroupeSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    total?: boolean
  }

  export type GroupeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "total", ExtArgs["result"]["groupe"]>

  export type $GroupePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Groupe"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      total: number
    }, ExtArgs["result"]["groupe"]>
    composites: {}
  }

  type GroupeGetPayload<S extends boolean | null | undefined | GroupeDefaultArgs> = $Result.GetResult<Prisma.$GroupePayload, S>

  type GroupeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupeCountAggregateInputType | true
    }

  export interface GroupeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Groupe'], meta: { name: 'Groupe' } }
    /**
     * Find zero or one Groupe that matches the filter.
     * @param {GroupeFindUniqueArgs} args - Arguments to find a Groupe
     * @example
     * // Get one Groupe
     * const groupe = await prisma.groupe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupeFindUniqueArgs>(args: SelectSubset<T, GroupeFindUniqueArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Groupe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupeFindUniqueOrThrowArgs} args - Arguments to find a Groupe
     * @example
     * // Get one Groupe
     * const groupe = await prisma.groupe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupeFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Groupe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeFindFirstArgs} args - Arguments to find a Groupe
     * @example
     * // Get one Groupe
     * const groupe = await prisma.groupe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupeFindFirstArgs>(args?: SelectSubset<T, GroupeFindFirstArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Groupe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeFindFirstOrThrowArgs} args - Arguments to find a Groupe
     * @example
     * // Get one Groupe
     * const groupe = await prisma.groupe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupeFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupeFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groupes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groupes
     * const groupes = await prisma.groupe.findMany()
     * 
     * // Get first 10 Groupes
     * const groupes = await prisma.groupe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupeWithIdOnly = await prisma.groupe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupeFindManyArgs>(args?: SelectSubset<T, GroupeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Groupe.
     * @param {GroupeCreateArgs} args - Arguments to create a Groupe.
     * @example
     * // Create one Groupe
     * const Groupe = await prisma.groupe.create({
     *   data: {
     *     // ... data to create a Groupe
     *   }
     * })
     * 
     */
    create<T extends GroupeCreateArgs>(args: SelectSubset<T, GroupeCreateArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groupes.
     * @param {GroupeCreateManyArgs} args - Arguments to create many Groupes.
     * @example
     * // Create many Groupes
     * const groupe = await prisma.groupe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupeCreateManyArgs>(args?: SelectSubset<T, GroupeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groupes and returns the data saved in the database.
     * @param {GroupeCreateManyAndReturnArgs} args - Arguments to create many Groupes.
     * @example
     * // Create many Groupes
     * const groupe = await prisma.groupe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groupes and only return the `id`
     * const groupeWithIdOnly = await prisma.groupe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupeCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Groupe.
     * @param {GroupeDeleteArgs} args - Arguments to delete one Groupe.
     * @example
     * // Delete one Groupe
     * const Groupe = await prisma.groupe.delete({
     *   where: {
     *     // ... filter to delete one Groupe
     *   }
     * })
     * 
     */
    delete<T extends GroupeDeleteArgs>(args: SelectSubset<T, GroupeDeleteArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Groupe.
     * @param {GroupeUpdateArgs} args - Arguments to update one Groupe.
     * @example
     * // Update one Groupe
     * const groupe = await prisma.groupe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupeUpdateArgs>(args: SelectSubset<T, GroupeUpdateArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groupes.
     * @param {GroupeDeleteManyArgs} args - Arguments to filter Groupes to delete.
     * @example
     * // Delete a few Groupes
     * const { count } = await prisma.groupe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupeDeleteManyArgs>(args?: SelectSubset<T, GroupeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groupes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groupes
     * const groupe = await prisma.groupe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupeUpdateManyArgs>(args: SelectSubset<T, GroupeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groupes and returns the data updated in the database.
     * @param {GroupeUpdateManyAndReturnArgs} args - Arguments to update many Groupes.
     * @example
     * // Update many Groupes
     * const groupe = await prisma.groupe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groupes and only return the `id`
     * const groupeWithIdOnly = await prisma.groupe.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupeUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Groupe.
     * @param {GroupeUpsertArgs} args - Arguments to update or create a Groupe.
     * @example
     * // Update or create a Groupe
     * const groupe = await prisma.groupe.upsert({
     *   create: {
     *     // ... data to create a Groupe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Groupe we want to update
     *   }
     * })
     */
    upsert<T extends GroupeUpsertArgs>(args: SelectSubset<T, GroupeUpsertArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groupes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeCountArgs} args - Arguments to filter Groupes to count.
     * @example
     * // Count the number of Groupes
     * const count = await prisma.groupe.count({
     *   where: {
     *     // ... the filter for the Groupes we want to count
     *   }
     * })
    **/
    count<T extends GroupeCountArgs>(
      args?: Subset<T, GroupeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Groupe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupeAggregateArgs>(args: Subset<T, GroupeAggregateArgs>): Prisma.PrismaPromise<GetGroupeAggregateType<T>>

    /**
     * Group by Groupe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupeGroupByArgs['orderBy'] }
        : { orderBy?: GroupeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Groupe model
   */
  readonly fields: GroupeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Groupe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Groupe model
   */
  interface GroupeFieldRefs {
    readonly id: FieldRef<"Groupe", 'Int'>
    readonly name: FieldRef<"Groupe", 'String'>
    readonly slug: FieldRef<"Groupe", 'String'>
    readonly total: FieldRef<"Groupe", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Groupe findUnique
   */
  export type GroupeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Filter, which Groupe to fetch.
     */
    where: GroupeWhereUniqueInput
  }

  /**
   * Groupe findUniqueOrThrow
   */
  export type GroupeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Filter, which Groupe to fetch.
     */
    where: GroupeWhereUniqueInput
  }

  /**
   * Groupe findFirst
   */
  export type GroupeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Filter, which Groupe to fetch.
     */
    where?: GroupeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groupes to fetch.
     */
    orderBy?: GroupeOrderByWithRelationInput | GroupeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groupes.
     */
    cursor?: GroupeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groupes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groupes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groupes.
     */
    distinct?: GroupeScalarFieldEnum | GroupeScalarFieldEnum[]
  }

  /**
   * Groupe findFirstOrThrow
   */
  export type GroupeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Filter, which Groupe to fetch.
     */
    where?: GroupeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groupes to fetch.
     */
    orderBy?: GroupeOrderByWithRelationInput | GroupeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groupes.
     */
    cursor?: GroupeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groupes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groupes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groupes.
     */
    distinct?: GroupeScalarFieldEnum | GroupeScalarFieldEnum[]
  }

  /**
   * Groupe findMany
   */
  export type GroupeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Filter, which Groupes to fetch.
     */
    where?: GroupeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groupes to fetch.
     */
    orderBy?: GroupeOrderByWithRelationInput | GroupeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groupes.
     */
    cursor?: GroupeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groupes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groupes.
     */
    skip?: number
    distinct?: GroupeScalarFieldEnum | GroupeScalarFieldEnum[]
  }

  /**
   * Groupe create
   */
  export type GroupeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * The data needed to create a Groupe.
     */
    data: XOR<GroupeCreateInput, GroupeUncheckedCreateInput>
  }

  /**
   * Groupe createMany
   */
  export type GroupeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groupes.
     */
    data: GroupeCreateManyInput | GroupeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Groupe createManyAndReturn
   */
  export type GroupeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * The data used to create many Groupes.
     */
    data: GroupeCreateManyInput | GroupeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Groupe update
   */
  export type GroupeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * The data needed to update a Groupe.
     */
    data: XOR<GroupeUpdateInput, GroupeUncheckedUpdateInput>
    /**
     * Choose, which Groupe to update.
     */
    where: GroupeWhereUniqueInput
  }

  /**
   * Groupe updateMany
   */
  export type GroupeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groupes.
     */
    data: XOR<GroupeUpdateManyMutationInput, GroupeUncheckedUpdateManyInput>
    /**
     * Filter which Groupes to update
     */
    where?: GroupeWhereInput
    /**
     * Limit how many Groupes to update.
     */
    limit?: number
  }

  /**
   * Groupe updateManyAndReturn
   */
  export type GroupeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * The data used to update Groupes.
     */
    data: XOR<GroupeUpdateManyMutationInput, GroupeUncheckedUpdateManyInput>
    /**
     * Filter which Groupes to update
     */
    where?: GroupeWhereInput
    /**
     * Limit how many Groupes to update.
     */
    limit?: number
  }

  /**
   * Groupe upsert
   */
  export type GroupeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * The filter to search for the Groupe to update in case it exists.
     */
    where: GroupeWhereUniqueInput
    /**
     * In case the Groupe found by the `where` argument doesn't exist, create a new Groupe with this data.
     */
    create: XOR<GroupeCreateInput, GroupeUncheckedCreateInput>
    /**
     * In case the Groupe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupeUpdateInput, GroupeUncheckedUpdateInput>
  }

  /**
   * Groupe delete
   */
  export type GroupeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Filter which Groupe to delete.
     */
    where: GroupeWhereUniqueInput
  }

  /**
   * Groupe deleteMany
   */
  export type GroupeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groupes to delete
     */
    where?: GroupeWhereInput
    /**
     * Limit how many Groupes to delete.
     */
    limit?: number
  }

  /**
   * Groupe without action
   */
  export type GroupeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
  }


  /**
   * Model Jury
   */

  export type AggregateJury = {
    _count: JuryCountAggregateOutputType | null
    _avg: JuryAvgAggregateOutputType | null
    _sum: JurySumAggregateOutputType | null
    _min: JuryMinAggregateOutputType | null
    _max: JuryMaxAggregateOutputType | null
  }

  export type JuryAvgAggregateOutputType = {
    id: number | null
    numero: number | null
    centre_id: number | null
  }

  export type JurySumAggregateOutputType = {
    id: number | null
    numero: number | null
    centre_id: number | null
  }

  export type JuryMinAggregateOutputType = {
    id: number | null
    numero: number | null
    centre_id: number | null
    president: string | null
  }

  export type JuryMaxAggregateOutputType = {
    id: number | null
    numero: number | null
    centre_id: number | null
    president: string | null
  }

  export type JuryCountAggregateOutputType = {
    id: number
    numero: number
    centre_id: number
    president: number
    _all: number
  }


  export type JuryAvgAggregateInputType = {
    id?: true
    numero?: true
    centre_id?: true
  }

  export type JurySumAggregateInputType = {
    id?: true
    numero?: true
    centre_id?: true
  }

  export type JuryMinAggregateInputType = {
    id?: true
    numero?: true
    centre_id?: true
    president?: true
  }

  export type JuryMaxAggregateInputType = {
    id?: true
    numero?: true
    centre_id?: true
    president?: true
  }

  export type JuryCountAggregateInputType = {
    id?: true
    numero?: true
    centre_id?: true
    president?: true
    _all?: true
  }

  export type JuryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jury to aggregate.
     */
    where?: JuryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Juries to fetch.
     */
    orderBy?: JuryOrderByWithRelationInput | JuryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JuryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Juries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Juries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Juries
    **/
    _count?: true | JuryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JuryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JurySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JuryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JuryMaxAggregateInputType
  }

  export type GetJuryAggregateType<T extends JuryAggregateArgs> = {
        [P in keyof T & keyof AggregateJury]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJury[P]>
      : GetScalarType<T[P], AggregateJury[P]>
  }




  export type JuryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JuryWhereInput
    orderBy?: JuryOrderByWithAggregationInput | JuryOrderByWithAggregationInput[]
    by: JuryScalarFieldEnum[] | JuryScalarFieldEnum
    having?: JuryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JuryCountAggregateInputType | true
    _avg?: JuryAvgAggregateInputType
    _sum?: JurySumAggregateInputType
    _min?: JuryMinAggregateInputType
    _max?: JuryMaxAggregateInputType
  }

  export type JuryGroupByOutputType = {
    id: number
    numero: number
    centre_id: number | null
    president: string | null
    _count: JuryCountAggregateOutputType | null
    _avg: JuryAvgAggregateOutputType | null
    _sum: JurySumAggregateOutputType | null
    _min: JuryMinAggregateOutputType | null
    _max: JuryMaxAggregateOutputType | null
  }

  type GetJuryGroupByPayload<T extends JuryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JuryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JuryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JuryGroupByOutputType[P]>
            : GetScalarType<T[P], JuryGroupByOutputType[P]>
        }
      >
    >


  export type JurySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    centre_id?: boolean
    president?: boolean
    centre?: boolean | Jury$centreArgs<ExtArgs>
  }, ExtArgs["result"]["jury"]>

  export type JurySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    centre_id?: boolean
    president?: boolean
    centre?: boolean | Jury$centreArgs<ExtArgs>
  }, ExtArgs["result"]["jury"]>

  export type JurySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    centre_id?: boolean
    president?: boolean
    centre?: boolean | Jury$centreArgs<ExtArgs>
  }, ExtArgs["result"]["jury"]>

  export type JurySelectScalar = {
    id?: boolean
    numero?: boolean
    centre_id?: boolean
    president?: boolean
  }

  export type JuryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "centre_id" | "president", ExtArgs["result"]["jury"]>
  export type JuryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    centre?: boolean | Jury$centreArgs<ExtArgs>
  }
  export type JuryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    centre?: boolean | Jury$centreArgs<ExtArgs>
  }
  export type JuryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    centre?: boolean | Jury$centreArgs<ExtArgs>
  }

  export type $JuryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jury"
    objects: {
      centre: Prisma.$CentrePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numero: number
      centre_id: number | null
      president: string | null
    }, ExtArgs["result"]["jury"]>
    composites: {}
  }

  type JuryGetPayload<S extends boolean | null | undefined | JuryDefaultArgs> = $Result.GetResult<Prisma.$JuryPayload, S>

  type JuryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JuryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JuryCountAggregateInputType | true
    }

  export interface JuryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jury'], meta: { name: 'Jury' } }
    /**
     * Find zero or one Jury that matches the filter.
     * @param {JuryFindUniqueArgs} args - Arguments to find a Jury
     * @example
     * // Get one Jury
     * const jury = await prisma.jury.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JuryFindUniqueArgs>(args: SelectSubset<T, JuryFindUniqueArgs<ExtArgs>>): Prisma__JuryClient<$Result.GetResult<Prisma.$JuryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jury that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JuryFindUniqueOrThrowArgs} args - Arguments to find a Jury
     * @example
     * // Get one Jury
     * const jury = await prisma.jury.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JuryFindUniqueOrThrowArgs>(args: SelectSubset<T, JuryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JuryClient<$Result.GetResult<Prisma.$JuryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jury that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuryFindFirstArgs} args - Arguments to find a Jury
     * @example
     * // Get one Jury
     * const jury = await prisma.jury.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JuryFindFirstArgs>(args?: SelectSubset<T, JuryFindFirstArgs<ExtArgs>>): Prisma__JuryClient<$Result.GetResult<Prisma.$JuryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jury that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuryFindFirstOrThrowArgs} args - Arguments to find a Jury
     * @example
     * // Get one Jury
     * const jury = await prisma.jury.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JuryFindFirstOrThrowArgs>(args?: SelectSubset<T, JuryFindFirstOrThrowArgs<ExtArgs>>): Prisma__JuryClient<$Result.GetResult<Prisma.$JuryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Juries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Juries
     * const juries = await prisma.jury.findMany()
     * 
     * // Get first 10 Juries
     * const juries = await prisma.jury.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const juryWithIdOnly = await prisma.jury.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JuryFindManyArgs>(args?: SelectSubset<T, JuryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jury.
     * @param {JuryCreateArgs} args - Arguments to create a Jury.
     * @example
     * // Create one Jury
     * const Jury = await prisma.jury.create({
     *   data: {
     *     // ... data to create a Jury
     *   }
     * })
     * 
     */
    create<T extends JuryCreateArgs>(args: SelectSubset<T, JuryCreateArgs<ExtArgs>>): Prisma__JuryClient<$Result.GetResult<Prisma.$JuryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Juries.
     * @param {JuryCreateManyArgs} args - Arguments to create many Juries.
     * @example
     * // Create many Juries
     * const jury = await prisma.jury.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JuryCreateManyArgs>(args?: SelectSubset<T, JuryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Juries and returns the data saved in the database.
     * @param {JuryCreateManyAndReturnArgs} args - Arguments to create many Juries.
     * @example
     * // Create many Juries
     * const jury = await prisma.jury.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Juries and only return the `id`
     * const juryWithIdOnly = await prisma.jury.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JuryCreateManyAndReturnArgs>(args?: SelectSubset<T, JuryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Jury.
     * @param {JuryDeleteArgs} args - Arguments to delete one Jury.
     * @example
     * // Delete one Jury
     * const Jury = await prisma.jury.delete({
     *   where: {
     *     // ... filter to delete one Jury
     *   }
     * })
     * 
     */
    delete<T extends JuryDeleteArgs>(args: SelectSubset<T, JuryDeleteArgs<ExtArgs>>): Prisma__JuryClient<$Result.GetResult<Prisma.$JuryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jury.
     * @param {JuryUpdateArgs} args - Arguments to update one Jury.
     * @example
     * // Update one Jury
     * const jury = await prisma.jury.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JuryUpdateArgs>(args: SelectSubset<T, JuryUpdateArgs<ExtArgs>>): Prisma__JuryClient<$Result.GetResult<Prisma.$JuryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Juries.
     * @param {JuryDeleteManyArgs} args - Arguments to filter Juries to delete.
     * @example
     * // Delete a few Juries
     * const { count } = await prisma.jury.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JuryDeleteManyArgs>(args?: SelectSubset<T, JuryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Juries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Juries
     * const jury = await prisma.jury.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JuryUpdateManyArgs>(args: SelectSubset<T, JuryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Juries and returns the data updated in the database.
     * @param {JuryUpdateManyAndReturnArgs} args - Arguments to update many Juries.
     * @example
     * // Update many Juries
     * const jury = await prisma.jury.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Juries and only return the `id`
     * const juryWithIdOnly = await prisma.jury.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JuryUpdateManyAndReturnArgs>(args: SelectSubset<T, JuryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Jury.
     * @param {JuryUpsertArgs} args - Arguments to update or create a Jury.
     * @example
     * // Update or create a Jury
     * const jury = await prisma.jury.upsert({
     *   create: {
     *     // ... data to create a Jury
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jury we want to update
     *   }
     * })
     */
    upsert<T extends JuryUpsertArgs>(args: SelectSubset<T, JuryUpsertArgs<ExtArgs>>): Prisma__JuryClient<$Result.GetResult<Prisma.$JuryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Juries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuryCountArgs} args - Arguments to filter Juries to count.
     * @example
     * // Count the number of Juries
     * const count = await prisma.jury.count({
     *   where: {
     *     // ... the filter for the Juries we want to count
     *   }
     * })
    **/
    count<T extends JuryCountArgs>(
      args?: Subset<T, JuryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JuryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jury.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JuryAggregateArgs>(args: Subset<T, JuryAggregateArgs>): Prisma.PrismaPromise<GetJuryAggregateType<T>>

    /**
     * Group by Jury.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JuryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JuryGroupByArgs['orderBy'] }
        : { orderBy?: JuryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JuryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJuryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jury model
   */
  readonly fields: JuryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jury.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JuryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    centre<T extends Jury$centreArgs<ExtArgs> = {}>(args?: Subset<T, Jury$centreArgs<ExtArgs>>): Prisma__CentreClient<$Result.GetResult<Prisma.$CentrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Jury model
   */
  interface JuryFieldRefs {
    readonly id: FieldRef<"Jury", 'Int'>
    readonly numero: FieldRef<"Jury", 'Int'>
    readonly centre_id: FieldRef<"Jury", 'Int'>
    readonly president: FieldRef<"Jury", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Jury findUnique
   */
  export type JuryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jury
     */
    select?: JurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jury
     */
    omit?: JuryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuryInclude<ExtArgs> | null
    /**
     * Filter, which Jury to fetch.
     */
    where: JuryWhereUniqueInput
  }

  /**
   * Jury findUniqueOrThrow
   */
  export type JuryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jury
     */
    select?: JurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jury
     */
    omit?: JuryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuryInclude<ExtArgs> | null
    /**
     * Filter, which Jury to fetch.
     */
    where: JuryWhereUniqueInput
  }

  /**
   * Jury findFirst
   */
  export type JuryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jury
     */
    select?: JurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jury
     */
    omit?: JuryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuryInclude<ExtArgs> | null
    /**
     * Filter, which Jury to fetch.
     */
    where?: JuryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Juries to fetch.
     */
    orderBy?: JuryOrderByWithRelationInput | JuryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Juries.
     */
    cursor?: JuryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Juries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Juries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Juries.
     */
    distinct?: JuryScalarFieldEnum | JuryScalarFieldEnum[]
  }

  /**
   * Jury findFirstOrThrow
   */
  export type JuryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jury
     */
    select?: JurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jury
     */
    omit?: JuryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuryInclude<ExtArgs> | null
    /**
     * Filter, which Jury to fetch.
     */
    where?: JuryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Juries to fetch.
     */
    orderBy?: JuryOrderByWithRelationInput | JuryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Juries.
     */
    cursor?: JuryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Juries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Juries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Juries.
     */
    distinct?: JuryScalarFieldEnum | JuryScalarFieldEnum[]
  }

  /**
   * Jury findMany
   */
  export type JuryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jury
     */
    select?: JurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jury
     */
    omit?: JuryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuryInclude<ExtArgs> | null
    /**
     * Filter, which Juries to fetch.
     */
    where?: JuryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Juries to fetch.
     */
    orderBy?: JuryOrderByWithRelationInput | JuryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Juries.
     */
    cursor?: JuryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Juries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Juries.
     */
    skip?: number
    distinct?: JuryScalarFieldEnum | JuryScalarFieldEnum[]
  }

  /**
   * Jury create
   */
  export type JuryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jury
     */
    select?: JurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jury
     */
    omit?: JuryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuryInclude<ExtArgs> | null
    /**
     * The data needed to create a Jury.
     */
    data: XOR<JuryCreateInput, JuryUncheckedCreateInput>
  }

  /**
   * Jury createMany
   */
  export type JuryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Juries.
     */
    data: JuryCreateManyInput | JuryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jury createManyAndReturn
   */
  export type JuryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jury
     */
    select?: JurySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jury
     */
    omit?: JuryOmit<ExtArgs> | null
    /**
     * The data used to create many Juries.
     */
    data: JuryCreateManyInput | JuryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Jury update
   */
  export type JuryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jury
     */
    select?: JurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jury
     */
    omit?: JuryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuryInclude<ExtArgs> | null
    /**
     * The data needed to update a Jury.
     */
    data: XOR<JuryUpdateInput, JuryUncheckedUpdateInput>
    /**
     * Choose, which Jury to update.
     */
    where: JuryWhereUniqueInput
  }

  /**
   * Jury updateMany
   */
  export type JuryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Juries.
     */
    data: XOR<JuryUpdateManyMutationInput, JuryUncheckedUpdateManyInput>
    /**
     * Filter which Juries to update
     */
    where?: JuryWhereInput
    /**
     * Limit how many Juries to update.
     */
    limit?: number
  }

  /**
   * Jury updateManyAndReturn
   */
  export type JuryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jury
     */
    select?: JurySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jury
     */
    omit?: JuryOmit<ExtArgs> | null
    /**
     * The data used to update Juries.
     */
    data: XOR<JuryUpdateManyMutationInput, JuryUncheckedUpdateManyInput>
    /**
     * Filter which Juries to update
     */
    where?: JuryWhereInput
    /**
     * Limit how many Juries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Jury upsert
   */
  export type JuryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jury
     */
    select?: JurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jury
     */
    omit?: JuryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuryInclude<ExtArgs> | null
    /**
     * The filter to search for the Jury to update in case it exists.
     */
    where: JuryWhereUniqueInput
    /**
     * In case the Jury found by the `where` argument doesn't exist, create a new Jury with this data.
     */
    create: XOR<JuryCreateInput, JuryUncheckedCreateInput>
    /**
     * In case the Jury was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JuryUpdateInput, JuryUncheckedUpdateInput>
  }

  /**
   * Jury delete
   */
  export type JuryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jury
     */
    select?: JurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jury
     */
    omit?: JuryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuryInclude<ExtArgs> | null
    /**
     * Filter which Jury to delete.
     */
    where: JuryWhereUniqueInput
  }

  /**
   * Jury deleteMany
   */
  export type JuryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Juries to delete
     */
    where?: JuryWhereInput
    /**
     * Limit how many Juries to delete.
     */
    limit?: number
  }

  /**
   * Jury.centre
   */
  export type Jury$centreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CentreInclude<ExtArgs> | null
    where?: CentreWhereInput
  }

  /**
   * Jury without action
   */
  export type JuryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jury
     */
    select?: JurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jury
     */
    omit?: JuryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuryInclude<ExtArgs> | null
  }


  /**
   * Model Matiere
   */

  export type AggregateMatiere = {
    _count: MatiereCountAggregateOutputType | null
    _avg: MatiereAvgAggregateOutputType | null
    _sum: MatiereSumAggregateOutputType | null
    _min: MatiereMinAggregateOutputType | null
    _max: MatiereMaxAggregateOutputType | null
  }

  export type MatiereAvgAggregateOutputType = {
    id: number | null
    slug: number | null
    coefficient: number | null
  }

  export type MatiereSumAggregateOutputType = {
    id: number | null
    slug: number | null
    coefficient: number | null
  }

  export type MatiereMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: number | null
    coefficient: number | null
  }

  export type MatiereMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: number | null
    coefficient: number | null
  }

  export type MatiereCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    coefficient: number
    _all: number
  }


  export type MatiereAvgAggregateInputType = {
    id?: true
    slug?: true
    coefficient?: true
  }

  export type MatiereSumAggregateInputType = {
    id?: true
    slug?: true
    coefficient?: true
  }

  export type MatiereMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    coefficient?: true
  }

  export type MatiereMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    coefficient?: true
  }

  export type MatiereCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    coefficient?: true
    _all?: true
  }

  export type MatiereAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matiere to aggregate.
     */
    where?: MatiereWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matieres to fetch.
     */
    orderBy?: MatiereOrderByWithRelationInput | MatiereOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatiereWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matieres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matieres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matieres
    **/
    _count?: true | MatiereCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatiereAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatiereSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatiereMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatiereMaxAggregateInputType
  }

  export type GetMatiereAggregateType<T extends MatiereAggregateArgs> = {
        [P in keyof T & keyof AggregateMatiere]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatiere[P]>
      : GetScalarType<T[P], AggregateMatiere[P]>
  }




  export type MatiereGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatiereWhereInput
    orderBy?: MatiereOrderByWithAggregationInput | MatiereOrderByWithAggregationInput[]
    by: MatiereScalarFieldEnum[] | MatiereScalarFieldEnum
    having?: MatiereScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatiereCountAggregateInputType | true
    _avg?: MatiereAvgAggregateInputType
    _sum?: MatiereSumAggregateInputType
    _min?: MatiereMinAggregateInputType
    _max?: MatiereMaxAggregateInputType
  }

  export type MatiereGroupByOutputType = {
    id: number
    name: string | null
    slug: number | null
    coefficient: number
    _count: MatiereCountAggregateOutputType | null
    _avg: MatiereAvgAggregateOutputType | null
    _sum: MatiereSumAggregateOutputType | null
    _min: MatiereMinAggregateOutputType | null
    _max: MatiereMaxAggregateOutputType | null
  }

  type GetMatiereGroupByPayload<T extends MatiereGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatiereGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatiereGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatiereGroupByOutputType[P]>
            : GetScalarType<T[P], MatiereGroupByOutputType[P]>
        }
      >
    >


  export type MatiereSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    coefficient?: boolean
    notes?: boolean | Matiere$notesArgs<ExtArgs>
    _count?: boolean | MatiereCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matiere"]>

  export type MatiereSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    coefficient?: boolean
  }, ExtArgs["result"]["matiere"]>

  export type MatiereSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    coefficient?: boolean
  }, ExtArgs["result"]["matiere"]>

  export type MatiereSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    coefficient?: boolean
  }

  export type MatiereOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "coefficient", ExtArgs["result"]["matiere"]>
  export type MatiereInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | Matiere$notesArgs<ExtArgs>
    _count?: boolean | MatiereCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MatiereIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MatiereIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MatierePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Matiere"
    objects: {
      notes: Prisma.$NotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      slug: number | null
      coefficient: number
    }, ExtArgs["result"]["matiere"]>
    composites: {}
  }

  type MatiereGetPayload<S extends boolean | null | undefined | MatiereDefaultArgs> = $Result.GetResult<Prisma.$MatierePayload, S>

  type MatiereCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatiereFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatiereCountAggregateInputType | true
    }

  export interface MatiereDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Matiere'], meta: { name: 'Matiere' } }
    /**
     * Find zero or one Matiere that matches the filter.
     * @param {MatiereFindUniqueArgs} args - Arguments to find a Matiere
     * @example
     * // Get one Matiere
     * const matiere = await prisma.matiere.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatiereFindUniqueArgs>(args: SelectSubset<T, MatiereFindUniqueArgs<ExtArgs>>): Prisma__MatiereClient<$Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Matiere that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatiereFindUniqueOrThrowArgs} args - Arguments to find a Matiere
     * @example
     * // Get one Matiere
     * const matiere = await prisma.matiere.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatiereFindUniqueOrThrowArgs>(args: SelectSubset<T, MatiereFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatiereClient<$Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matiere that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatiereFindFirstArgs} args - Arguments to find a Matiere
     * @example
     * // Get one Matiere
     * const matiere = await prisma.matiere.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatiereFindFirstArgs>(args?: SelectSubset<T, MatiereFindFirstArgs<ExtArgs>>): Prisma__MatiereClient<$Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matiere that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatiereFindFirstOrThrowArgs} args - Arguments to find a Matiere
     * @example
     * // Get one Matiere
     * const matiere = await prisma.matiere.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatiereFindFirstOrThrowArgs>(args?: SelectSubset<T, MatiereFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatiereClient<$Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matieres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatiereFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matieres
     * const matieres = await prisma.matiere.findMany()
     * 
     * // Get first 10 Matieres
     * const matieres = await prisma.matiere.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matiereWithIdOnly = await prisma.matiere.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatiereFindManyArgs>(args?: SelectSubset<T, MatiereFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Matiere.
     * @param {MatiereCreateArgs} args - Arguments to create a Matiere.
     * @example
     * // Create one Matiere
     * const Matiere = await prisma.matiere.create({
     *   data: {
     *     // ... data to create a Matiere
     *   }
     * })
     * 
     */
    create<T extends MatiereCreateArgs>(args: SelectSubset<T, MatiereCreateArgs<ExtArgs>>): Prisma__MatiereClient<$Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matieres.
     * @param {MatiereCreateManyArgs} args - Arguments to create many Matieres.
     * @example
     * // Create many Matieres
     * const matiere = await prisma.matiere.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatiereCreateManyArgs>(args?: SelectSubset<T, MatiereCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matieres and returns the data saved in the database.
     * @param {MatiereCreateManyAndReturnArgs} args - Arguments to create many Matieres.
     * @example
     * // Create many Matieres
     * const matiere = await prisma.matiere.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matieres and only return the `id`
     * const matiereWithIdOnly = await prisma.matiere.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatiereCreateManyAndReturnArgs>(args?: SelectSubset<T, MatiereCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Matiere.
     * @param {MatiereDeleteArgs} args - Arguments to delete one Matiere.
     * @example
     * // Delete one Matiere
     * const Matiere = await prisma.matiere.delete({
     *   where: {
     *     // ... filter to delete one Matiere
     *   }
     * })
     * 
     */
    delete<T extends MatiereDeleteArgs>(args: SelectSubset<T, MatiereDeleteArgs<ExtArgs>>): Prisma__MatiereClient<$Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Matiere.
     * @param {MatiereUpdateArgs} args - Arguments to update one Matiere.
     * @example
     * // Update one Matiere
     * const matiere = await prisma.matiere.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatiereUpdateArgs>(args: SelectSubset<T, MatiereUpdateArgs<ExtArgs>>): Prisma__MatiereClient<$Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matieres.
     * @param {MatiereDeleteManyArgs} args - Arguments to filter Matieres to delete.
     * @example
     * // Delete a few Matieres
     * const { count } = await prisma.matiere.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatiereDeleteManyArgs>(args?: SelectSubset<T, MatiereDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matieres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatiereUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matieres
     * const matiere = await prisma.matiere.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatiereUpdateManyArgs>(args: SelectSubset<T, MatiereUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matieres and returns the data updated in the database.
     * @param {MatiereUpdateManyAndReturnArgs} args - Arguments to update many Matieres.
     * @example
     * // Update many Matieres
     * const matiere = await prisma.matiere.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matieres and only return the `id`
     * const matiereWithIdOnly = await prisma.matiere.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatiereUpdateManyAndReturnArgs>(args: SelectSubset<T, MatiereUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Matiere.
     * @param {MatiereUpsertArgs} args - Arguments to update or create a Matiere.
     * @example
     * // Update or create a Matiere
     * const matiere = await prisma.matiere.upsert({
     *   create: {
     *     // ... data to create a Matiere
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matiere we want to update
     *   }
     * })
     */
    upsert<T extends MatiereUpsertArgs>(args: SelectSubset<T, MatiereUpsertArgs<ExtArgs>>): Prisma__MatiereClient<$Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matieres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatiereCountArgs} args - Arguments to filter Matieres to count.
     * @example
     * // Count the number of Matieres
     * const count = await prisma.matiere.count({
     *   where: {
     *     // ... the filter for the Matieres we want to count
     *   }
     * })
    **/
    count<T extends MatiereCountArgs>(
      args?: Subset<T, MatiereCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatiereCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matiere.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatiereAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatiereAggregateArgs>(args: Subset<T, MatiereAggregateArgs>): Prisma.PrismaPromise<GetMatiereAggregateType<T>>

    /**
     * Group by Matiere.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatiereGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatiereGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatiereGroupByArgs['orderBy'] }
        : { orderBy?: MatiereGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatiereGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatiereGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Matiere model
   */
  readonly fields: MatiereFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Matiere.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatiereClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notes<T extends Matiere$notesArgs<ExtArgs> = {}>(args?: Subset<T, Matiere$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Matiere model
   */
  interface MatiereFieldRefs {
    readonly id: FieldRef<"Matiere", 'Int'>
    readonly name: FieldRef<"Matiere", 'String'>
    readonly slug: FieldRef<"Matiere", 'Int'>
    readonly coefficient: FieldRef<"Matiere", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Matiere findUnique
   */
  export type MatiereFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matiere
     */
    select?: MatiereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matiere
     */
    omit?: MatiereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatiereInclude<ExtArgs> | null
    /**
     * Filter, which Matiere to fetch.
     */
    where: MatiereWhereUniqueInput
  }

  /**
   * Matiere findUniqueOrThrow
   */
  export type MatiereFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matiere
     */
    select?: MatiereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matiere
     */
    omit?: MatiereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatiereInclude<ExtArgs> | null
    /**
     * Filter, which Matiere to fetch.
     */
    where: MatiereWhereUniqueInput
  }

  /**
   * Matiere findFirst
   */
  export type MatiereFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matiere
     */
    select?: MatiereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matiere
     */
    omit?: MatiereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatiereInclude<ExtArgs> | null
    /**
     * Filter, which Matiere to fetch.
     */
    where?: MatiereWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matieres to fetch.
     */
    orderBy?: MatiereOrderByWithRelationInput | MatiereOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matieres.
     */
    cursor?: MatiereWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matieres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matieres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matieres.
     */
    distinct?: MatiereScalarFieldEnum | MatiereScalarFieldEnum[]
  }

  /**
   * Matiere findFirstOrThrow
   */
  export type MatiereFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matiere
     */
    select?: MatiereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matiere
     */
    omit?: MatiereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatiereInclude<ExtArgs> | null
    /**
     * Filter, which Matiere to fetch.
     */
    where?: MatiereWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matieres to fetch.
     */
    orderBy?: MatiereOrderByWithRelationInput | MatiereOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matieres.
     */
    cursor?: MatiereWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matieres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matieres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matieres.
     */
    distinct?: MatiereScalarFieldEnum | MatiereScalarFieldEnum[]
  }

  /**
   * Matiere findMany
   */
  export type MatiereFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matiere
     */
    select?: MatiereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matiere
     */
    omit?: MatiereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatiereInclude<ExtArgs> | null
    /**
     * Filter, which Matieres to fetch.
     */
    where?: MatiereWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matieres to fetch.
     */
    orderBy?: MatiereOrderByWithRelationInput | MatiereOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matieres.
     */
    cursor?: MatiereWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matieres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matieres.
     */
    skip?: number
    distinct?: MatiereScalarFieldEnum | MatiereScalarFieldEnum[]
  }

  /**
   * Matiere create
   */
  export type MatiereCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matiere
     */
    select?: MatiereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matiere
     */
    omit?: MatiereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatiereInclude<ExtArgs> | null
    /**
     * The data needed to create a Matiere.
     */
    data: XOR<MatiereCreateInput, MatiereUncheckedCreateInput>
  }

  /**
   * Matiere createMany
   */
  export type MatiereCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matieres.
     */
    data: MatiereCreateManyInput | MatiereCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Matiere createManyAndReturn
   */
  export type MatiereCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matiere
     */
    select?: MatiereSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Matiere
     */
    omit?: MatiereOmit<ExtArgs> | null
    /**
     * The data used to create many Matieres.
     */
    data: MatiereCreateManyInput | MatiereCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Matiere update
   */
  export type MatiereUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matiere
     */
    select?: MatiereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matiere
     */
    omit?: MatiereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatiereInclude<ExtArgs> | null
    /**
     * The data needed to update a Matiere.
     */
    data: XOR<MatiereUpdateInput, MatiereUncheckedUpdateInput>
    /**
     * Choose, which Matiere to update.
     */
    where: MatiereWhereUniqueInput
  }

  /**
   * Matiere updateMany
   */
  export type MatiereUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matieres.
     */
    data: XOR<MatiereUpdateManyMutationInput, MatiereUncheckedUpdateManyInput>
    /**
     * Filter which Matieres to update
     */
    where?: MatiereWhereInput
    /**
     * Limit how many Matieres to update.
     */
    limit?: number
  }

  /**
   * Matiere updateManyAndReturn
   */
  export type MatiereUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matiere
     */
    select?: MatiereSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Matiere
     */
    omit?: MatiereOmit<ExtArgs> | null
    /**
     * The data used to update Matieres.
     */
    data: XOR<MatiereUpdateManyMutationInput, MatiereUncheckedUpdateManyInput>
    /**
     * Filter which Matieres to update
     */
    where?: MatiereWhereInput
    /**
     * Limit how many Matieres to update.
     */
    limit?: number
  }

  /**
   * Matiere upsert
   */
  export type MatiereUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matiere
     */
    select?: MatiereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matiere
     */
    omit?: MatiereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatiereInclude<ExtArgs> | null
    /**
     * The filter to search for the Matiere to update in case it exists.
     */
    where: MatiereWhereUniqueInput
    /**
     * In case the Matiere found by the `where` argument doesn't exist, create a new Matiere with this data.
     */
    create: XOR<MatiereCreateInput, MatiereUncheckedCreateInput>
    /**
     * In case the Matiere was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatiereUpdateInput, MatiereUncheckedUpdateInput>
  }

  /**
   * Matiere delete
   */
  export type MatiereDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matiere
     */
    select?: MatiereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matiere
     */
    omit?: MatiereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatiereInclude<ExtArgs> | null
    /**
     * Filter which Matiere to delete.
     */
    where: MatiereWhereUniqueInput
  }

  /**
   * Matiere deleteMany
   */
  export type MatiereDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matieres to delete
     */
    where?: MatiereWhereInput
    /**
     * Limit how many Matieres to delete.
     */
    limit?: number
  }

  /**
   * Matiere.notes
   */
  export type Matiere$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Matiere without action
   */
  export type MatiereDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matiere
     */
    select?: MatiereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matiere
     */
    omit?: MatiereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatiereInclude<ExtArgs> | null
  }


  /**
   * Model Note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteAvgAggregateOutputType = {
    id: number | null
    candidat_id: number | null
    matiere_id: number | null
    score: number | null
    groupe_id: number | null
  }

  export type NoteSumAggregateOutputType = {
    id: number | null
    candidat_id: number | null
    matiere_id: number | null
    score: number | null
    groupe_id: number | null
  }

  export type NoteMinAggregateOutputType = {
    id: number | null
    candidat_id: number | null
    matiere_id: number | null
    score: number | null
    groupe_id: number | null
  }

  export type NoteMaxAggregateOutputType = {
    id: number | null
    candidat_id: number | null
    matiere_id: number | null
    score: number | null
    groupe_id: number | null
  }

  export type NoteCountAggregateOutputType = {
    id: number
    candidat_id: number
    matiere_id: number
    score: number
    groupe_id: number
    _all: number
  }


  export type NoteAvgAggregateInputType = {
    id?: true
    candidat_id?: true
    matiere_id?: true
    score?: true
    groupe_id?: true
  }

  export type NoteSumAggregateInputType = {
    id?: true
    candidat_id?: true
    matiere_id?: true
    score?: true
    groupe_id?: true
  }

  export type NoteMinAggregateInputType = {
    id?: true
    candidat_id?: true
    matiere_id?: true
    score?: true
    groupe_id?: true
  }

  export type NoteMaxAggregateInputType = {
    id?: true
    candidat_id?: true
    matiere_id?: true
    score?: true
    groupe_id?: true
  }

  export type NoteCountAggregateInputType = {
    id?: true
    candidat_id?: true
    matiere_id?: true
    score?: true
    groupe_id?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithAggregationInput | NoteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _avg?: NoteAvgAggregateInputType
    _sum?: NoteSumAggregateInputType
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }

  export type NoteGroupByOutputType = {
    id: number
    candidat_id: number
    matiere_id: number
    score: number
    groupe_id: number
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidat_id?: boolean
    matiere_id?: boolean
    score?: boolean
    groupe_id?: boolean
    candidat?: boolean | CandidatDefaultArgs<ExtArgs>
    matiere?: boolean | MatiereDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidat_id?: boolean
    matiere_id?: boolean
    score?: boolean
    groupe_id?: boolean
    candidat?: boolean | CandidatDefaultArgs<ExtArgs>
    matiere?: boolean | MatiereDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidat_id?: boolean
    matiere_id?: boolean
    score?: boolean
    groupe_id?: boolean
    candidat?: boolean | CandidatDefaultArgs<ExtArgs>
    matiere?: boolean | MatiereDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectScalar = {
    id?: boolean
    candidat_id?: boolean
    matiere_id?: boolean
    score?: boolean
    groupe_id?: boolean
  }

  export type NoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "candidat_id" | "matiere_id" | "score" | "groupe_id", ExtArgs["result"]["note"]>
  export type NoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidat?: boolean | CandidatDefaultArgs<ExtArgs>
    matiere?: boolean | MatiereDefaultArgs<ExtArgs>
  }
  export type NoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidat?: boolean | CandidatDefaultArgs<ExtArgs>
    matiere?: boolean | MatiereDefaultArgs<ExtArgs>
  }
  export type NoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidat?: boolean | CandidatDefaultArgs<ExtArgs>
    matiere?: boolean | MatiereDefaultArgs<ExtArgs>
  }

  export type $NotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Note"
    objects: {
      candidat: Prisma.$CandidatPayload<ExtArgs>
      matiere: Prisma.$MatierePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      candidat_id: number
      matiere_id: number
      score: number
      groupe_id: number
    }, ExtArgs["result"]["note"]>
    composites: {}
  }

  type NoteGetPayload<S extends boolean | null | undefined | NoteDefaultArgs> = $Result.GetResult<Prisma.$NotePayload, S>

  type NoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface NoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Note'], meta: { name: 'Note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteFindUniqueArgs>(args: SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Note that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteFindFirstArgs>(args?: SelectSubset<T, NoteFindFirstArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteWithIdOnly = await prisma.note.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoteFindManyArgs>(args?: SelectSubset<T, NoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
     */
    create<T extends NoteCreateArgs>(args: SelectSubset<T, NoteCreateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {NoteCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteCreateManyArgs>(args?: SelectSubset<T, NoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {NoteCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
     */
    delete<T extends NoteDeleteArgs>(args: SelectSubset<T, NoteDeleteArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteUpdateArgs>(args: SelectSubset<T, NoteUpdateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteDeleteManyArgs>(args?: SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteUpdateManyArgs>(args: SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {NoteUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NoteUpdateManyAndReturnArgs>(args: SelectSubset<T, NoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
     */
    upsert<T extends NoteUpsertArgs>(args: SelectSubset<T, NoteUpsertArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Note model
   */
  readonly fields: NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidat<T extends CandidatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidatDefaultArgs<ExtArgs>>): Prisma__CandidatClient<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    matiere<T extends MatiereDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatiereDefaultArgs<ExtArgs>>): Prisma__MatiereClient<$Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Note model
   */
  interface NoteFieldRefs {
    readonly id: FieldRef<"Note", 'Int'>
    readonly candidat_id: FieldRef<"Note", 'Int'>
    readonly matiere_id: FieldRef<"Note", 'Int'>
    readonly score: FieldRef<"Note", 'Float'>
    readonly groupe_id: FieldRef<"Note", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Note findUnique
   */
  export type NoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findFirst
   */
  export type NoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findMany
   */
  export type NoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note create
   */
  export type NoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Note.
     */
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>
  }

  /**
   * Note createMany
   */
  export type NoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Note createManyAndReturn
   */
  export type NoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note update
   */
  export type NoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Note updateManyAndReturn
   */
  export type NoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note upsert
   */
  export type NoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
  }

  /**
   * Note delete
   */
  export type NoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to delete.
     */
    limit?: number
  }

  /**
   * Note without action
   */
  export type NoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
  }


  /**
   * Model Resultat
   */

  export type AggregateResultat = {
    _count: ResultatCountAggregateOutputType | null
    _avg: ResultatAvgAggregateOutputType | null
    _sum: ResultatSumAggregateOutputType | null
    _min: ResultatMinAggregateOutputType | null
    _max: ResultatMaxAggregateOutputType | null
  }

  export type ResultatAvgAggregateOutputType = {
    id: number | null
    candidat_id: number | null
    total: number | null
    moyenne: number | null
    rang: number | null
  }

  export type ResultatSumAggregateOutputType = {
    id: number | null
    candidat_id: number | null
    total: number | null
    moyenne: number | null
    rang: number | null
  }

  export type ResultatMinAggregateOutputType = {
    id: number | null
    candidat_id: number | null
    total: number | null
    moyenne: number | null
    rang: number | null
  }

  export type ResultatMaxAggregateOutputType = {
    id: number | null
    candidat_id: number | null
    total: number | null
    moyenne: number | null
    rang: number | null
  }

  export type ResultatCountAggregateOutputType = {
    id: number
    candidat_id: number
    total: number
    moyenne: number
    rang: number
    _all: number
  }


  export type ResultatAvgAggregateInputType = {
    id?: true
    candidat_id?: true
    total?: true
    moyenne?: true
    rang?: true
  }

  export type ResultatSumAggregateInputType = {
    id?: true
    candidat_id?: true
    total?: true
    moyenne?: true
    rang?: true
  }

  export type ResultatMinAggregateInputType = {
    id?: true
    candidat_id?: true
    total?: true
    moyenne?: true
    rang?: true
  }

  export type ResultatMaxAggregateInputType = {
    id?: true
    candidat_id?: true
    total?: true
    moyenne?: true
    rang?: true
  }

  export type ResultatCountAggregateInputType = {
    id?: true
    candidat_id?: true
    total?: true
    moyenne?: true
    rang?: true
    _all?: true
  }

  export type ResultatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resultat to aggregate.
     */
    where?: ResultatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resultats to fetch.
     */
    orderBy?: ResultatOrderByWithRelationInput | ResultatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResultatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resultats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resultats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resultats
    **/
    _count?: true | ResultatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResultatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResultatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResultatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResultatMaxAggregateInputType
  }

  export type GetResultatAggregateType<T extends ResultatAggregateArgs> = {
        [P in keyof T & keyof AggregateResultat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResultat[P]>
      : GetScalarType<T[P], AggregateResultat[P]>
  }




  export type ResultatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultatWhereInput
    orderBy?: ResultatOrderByWithAggregationInput | ResultatOrderByWithAggregationInput[]
    by: ResultatScalarFieldEnum[] | ResultatScalarFieldEnum
    having?: ResultatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResultatCountAggregateInputType | true
    _avg?: ResultatAvgAggregateInputType
    _sum?: ResultatSumAggregateInputType
    _min?: ResultatMinAggregateInputType
    _max?: ResultatMaxAggregateInputType
  }

  export type ResultatGroupByOutputType = {
    id: number
    candidat_id: number
    total: number | null
    moyenne: number | null
    rang: number | null
    _count: ResultatCountAggregateOutputType | null
    _avg: ResultatAvgAggregateOutputType | null
    _sum: ResultatSumAggregateOutputType | null
    _min: ResultatMinAggregateOutputType | null
    _max: ResultatMaxAggregateOutputType | null
  }

  type GetResultatGroupByPayload<T extends ResultatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResultatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResultatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResultatGroupByOutputType[P]>
            : GetScalarType<T[P], ResultatGroupByOutputType[P]>
        }
      >
    >


  export type ResultatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidat_id?: boolean
    total?: boolean
    moyenne?: boolean
    rang?: boolean
    candidat?: boolean | CandidatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resultat"]>

  export type ResultatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidat_id?: boolean
    total?: boolean
    moyenne?: boolean
    rang?: boolean
    candidat?: boolean | CandidatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resultat"]>

  export type ResultatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidat_id?: boolean
    total?: boolean
    moyenne?: boolean
    rang?: boolean
    candidat?: boolean | CandidatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resultat"]>

  export type ResultatSelectScalar = {
    id?: boolean
    candidat_id?: boolean
    total?: boolean
    moyenne?: boolean
    rang?: boolean
  }

  export type ResultatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "candidat_id" | "total" | "moyenne" | "rang", ExtArgs["result"]["resultat"]>
  export type ResultatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidat?: boolean | CandidatDefaultArgs<ExtArgs>
  }
  export type ResultatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidat?: boolean | CandidatDefaultArgs<ExtArgs>
  }
  export type ResultatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidat?: boolean | CandidatDefaultArgs<ExtArgs>
  }

  export type $ResultatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resultat"
    objects: {
      candidat: Prisma.$CandidatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      candidat_id: number
      total: number | null
      moyenne: number | null
      rang: number | null
    }, ExtArgs["result"]["resultat"]>
    composites: {}
  }

  type ResultatGetPayload<S extends boolean | null | undefined | ResultatDefaultArgs> = $Result.GetResult<Prisma.$ResultatPayload, S>

  type ResultatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResultatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResultatCountAggregateInputType | true
    }

  export interface ResultatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resultat'], meta: { name: 'Resultat' } }
    /**
     * Find zero or one Resultat that matches the filter.
     * @param {ResultatFindUniqueArgs} args - Arguments to find a Resultat
     * @example
     * // Get one Resultat
     * const resultat = await prisma.resultat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResultatFindUniqueArgs>(args: SelectSubset<T, ResultatFindUniqueArgs<ExtArgs>>): Prisma__ResultatClient<$Result.GetResult<Prisma.$ResultatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resultat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResultatFindUniqueOrThrowArgs} args - Arguments to find a Resultat
     * @example
     * // Get one Resultat
     * const resultat = await prisma.resultat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResultatFindUniqueOrThrowArgs>(args: SelectSubset<T, ResultatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResultatClient<$Result.GetResult<Prisma.$ResultatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resultat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultatFindFirstArgs} args - Arguments to find a Resultat
     * @example
     * // Get one Resultat
     * const resultat = await prisma.resultat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResultatFindFirstArgs>(args?: SelectSubset<T, ResultatFindFirstArgs<ExtArgs>>): Prisma__ResultatClient<$Result.GetResult<Prisma.$ResultatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resultat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultatFindFirstOrThrowArgs} args - Arguments to find a Resultat
     * @example
     * // Get one Resultat
     * const resultat = await prisma.resultat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResultatFindFirstOrThrowArgs>(args?: SelectSubset<T, ResultatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResultatClient<$Result.GetResult<Prisma.$ResultatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resultats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resultats
     * const resultats = await prisma.resultat.findMany()
     * 
     * // Get first 10 Resultats
     * const resultats = await prisma.resultat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resultatWithIdOnly = await prisma.resultat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResultatFindManyArgs>(args?: SelectSubset<T, ResultatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resultat.
     * @param {ResultatCreateArgs} args - Arguments to create a Resultat.
     * @example
     * // Create one Resultat
     * const Resultat = await prisma.resultat.create({
     *   data: {
     *     // ... data to create a Resultat
     *   }
     * })
     * 
     */
    create<T extends ResultatCreateArgs>(args: SelectSubset<T, ResultatCreateArgs<ExtArgs>>): Prisma__ResultatClient<$Result.GetResult<Prisma.$ResultatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resultats.
     * @param {ResultatCreateManyArgs} args - Arguments to create many Resultats.
     * @example
     * // Create many Resultats
     * const resultat = await prisma.resultat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResultatCreateManyArgs>(args?: SelectSubset<T, ResultatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resultats and returns the data saved in the database.
     * @param {ResultatCreateManyAndReturnArgs} args - Arguments to create many Resultats.
     * @example
     * // Create many Resultats
     * const resultat = await prisma.resultat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resultats and only return the `id`
     * const resultatWithIdOnly = await prisma.resultat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResultatCreateManyAndReturnArgs>(args?: SelectSubset<T, ResultatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resultat.
     * @param {ResultatDeleteArgs} args - Arguments to delete one Resultat.
     * @example
     * // Delete one Resultat
     * const Resultat = await prisma.resultat.delete({
     *   where: {
     *     // ... filter to delete one Resultat
     *   }
     * })
     * 
     */
    delete<T extends ResultatDeleteArgs>(args: SelectSubset<T, ResultatDeleteArgs<ExtArgs>>): Prisma__ResultatClient<$Result.GetResult<Prisma.$ResultatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resultat.
     * @param {ResultatUpdateArgs} args - Arguments to update one Resultat.
     * @example
     * // Update one Resultat
     * const resultat = await prisma.resultat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResultatUpdateArgs>(args: SelectSubset<T, ResultatUpdateArgs<ExtArgs>>): Prisma__ResultatClient<$Result.GetResult<Prisma.$ResultatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resultats.
     * @param {ResultatDeleteManyArgs} args - Arguments to filter Resultats to delete.
     * @example
     * // Delete a few Resultats
     * const { count } = await prisma.resultat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResultatDeleteManyArgs>(args?: SelectSubset<T, ResultatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resultats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resultats
     * const resultat = await prisma.resultat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResultatUpdateManyArgs>(args: SelectSubset<T, ResultatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resultats and returns the data updated in the database.
     * @param {ResultatUpdateManyAndReturnArgs} args - Arguments to update many Resultats.
     * @example
     * // Update many Resultats
     * const resultat = await prisma.resultat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resultats and only return the `id`
     * const resultatWithIdOnly = await prisma.resultat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResultatUpdateManyAndReturnArgs>(args: SelectSubset<T, ResultatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resultat.
     * @param {ResultatUpsertArgs} args - Arguments to update or create a Resultat.
     * @example
     * // Update or create a Resultat
     * const resultat = await prisma.resultat.upsert({
     *   create: {
     *     // ... data to create a Resultat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resultat we want to update
     *   }
     * })
     */
    upsert<T extends ResultatUpsertArgs>(args: SelectSubset<T, ResultatUpsertArgs<ExtArgs>>): Prisma__ResultatClient<$Result.GetResult<Prisma.$ResultatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resultats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultatCountArgs} args - Arguments to filter Resultats to count.
     * @example
     * // Count the number of Resultats
     * const count = await prisma.resultat.count({
     *   where: {
     *     // ... the filter for the Resultats we want to count
     *   }
     * })
    **/
    count<T extends ResultatCountArgs>(
      args?: Subset<T, ResultatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResultatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resultat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResultatAggregateArgs>(args: Subset<T, ResultatAggregateArgs>): Prisma.PrismaPromise<GetResultatAggregateType<T>>

    /**
     * Group by Resultat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResultatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResultatGroupByArgs['orderBy'] }
        : { orderBy?: ResultatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResultatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resultat model
   */
  readonly fields: ResultatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resultat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResultatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidat<T extends CandidatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidatDefaultArgs<ExtArgs>>): Prisma__CandidatClient<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resultat model
   */
  interface ResultatFieldRefs {
    readonly id: FieldRef<"Resultat", 'Int'>
    readonly candidat_id: FieldRef<"Resultat", 'Int'>
    readonly total: FieldRef<"Resultat", 'Float'>
    readonly moyenne: FieldRef<"Resultat", 'Float'>
    readonly rang: FieldRef<"Resultat", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Resultat findUnique
   */
  export type ResultatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultat
     */
    select?: ResultatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultat
     */
    omit?: ResultatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultatInclude<ExtArgs> | null
    /**
     * Filter, which Resultat to fetch.
     */
    where: ResultatWhereUniqueInput
  }

  /**
   * Resultat findUniqueOrThrow
   */
  export type ResultatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultat
     */
    select?: ResultatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultat
     */
    omit?: ResultatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultatInclude<ExtArgs> | null
    /**
     * Filter, which Resultat to fetch.
     */
    where: ResultatWhereUniqueInput
  }

  /**
   * Resultat findFirst
   */
  export type ResultatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultat
     */
    select?: ResultatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultat
     */
    omit?: ResultatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultatInclude<ExtArgs> | null
    /**
     * Filter, which Resultat to fetch.
     */
    where?: ResultatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resultats to fetch.
     */
    orderBy?: ResultatOrderByWithRelationInput | ResultatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resultats.
     */
    cursor?: ResultatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resultats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resultats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resultats.
     */
    distinct?: ResultatScalarFieldEnum | ResultatScalarFieldEnum[]
  }

  /**
   * Resultat findFirstOrThrow
   */
  export type ResultatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultat
     */
    select?: ResultatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultat
     */
    omit?: ResultatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultatInclude<ExtArgs> | null
    /**
     * Filter, which Resultat to fetch.
     */
    where?: ResultatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resultats to fetch.
     */
    orderBy?: ResultatOrderByWithRelationInput | ResultatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resultats.
     */
    cursor?: ResultatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resultats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resultats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resultats.
     */
    distinct?: ResultatScalarFieldEnum | ResultatScalarFieldEnum[]
  }

  /**
   * Resultat findMany
   */
  export type ResultatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultat
     */
    select?: ResultatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultat
     */
    omit?: ResultatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultatInclude<ExtArgs> | null
    /**
     * Filter, which Resultats to fetch.
     */
    where?: ResultatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resultats to fetch.
     */
    orderBy?: ResultatOrderByWithRelationInput | ResultatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resultats.
     */
    cursor?: ResultatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resultats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resultats.
     */
    skip?: number
    distinct?: ResultatScalarFieldEnum | ResultatScalarFieldEnum[]
  }

  /**
   * Resultat create
   */
  export type ResultatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultat
     */
    select?: ResultatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultat
     */
    omit?: ResultatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultatInclude<ExtArgs> | null
    /**
     * The data needed to create a Resultat.
     */
    data: XOR<ResultatCreateInput, ResultatUncheckedCreateInput>
  }

  /**
   * Resultat createMany
   */
  export type ResultatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resultats.
     */
    data: ResultatCreateManyInput | ResultatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resultat createManyAndReturn
   */
  export type ResultatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultat
     */
    select?: ResultatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resultat
     */
    omit?: ResultatOmit<ExtArgs> | null
    /**
     * The data used to create many Resultats.
     */
    data: ResultatCreateManyInput | ResultatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resultat update
   */
  export type ResultatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultat
     */
    select?: ResultatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultat
     */
    omit?: ResultatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultatInclude<ExtArgs> | null
    /**
     * The data needed to update a Resultat.
     */
    data: XOR<ResultatUpdateInput, ResultatUncheckedUpdateInput>
    /**
     * Choose, which Resultat to update.
     */
    where: ResultatWhereUniqueInput
  }

  /**
   * Resultat updateMany
   */
  export type ResultatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resultats.
     */
    data: XOR<ResultatUpdateManyMutationInput, ResultatUncheckedUpdateManyInput>
    /**
     * Filter which Resultats to update
     */
    where?: ResultatWhereInput
    /**
     * Limit how many Resultats to update.
     */
    limit?: number
  }

  /**
   * Resultat updateManyAndReturn
   */
  export type ResultatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultat
     */
    select?: ResultatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resultat
     */
    omit?: ResultatOmit<ExtArgs> | null
    /**
     * The data used to update Resultats.
     */
    data: XOR<ResultatUpdateManyMutationInput, ResultatUncheckedUpdateManyInput>
    /**
     * Filter which Resultats to update
     */
    where?: ResultatWhereInput
    /**
     * Limit how many Resultats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resultat upsert
   */
  export type ResultatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultat
     */
    select?: ResultatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultat
     */
    omit?: ResultatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultatInclude<ExtArgs> | null
    /**
     * The filter to search for the Resultat to update in case it exists.
     */
    where: ResultatWhereUniqueInput
    /**
     * In case the Resultat found by the `where` argument doesn't exist, create a new Resultat with this data.
     */
    create: XOR<ResultatCreateInput, ResultatUncheckedCreateInput>
    /**
     * In case the Resultat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResultatUpdateInput, ResultatUncheckedUpdateInput>
  }

  /**
   * Resultat delete
   */
  export type ResultatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultat
     */
    select?: ResultatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultat
     */
    omit?: ResultatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultatInclude<ExtArgs> | null
    /**
     * Filter which Resultat to delete.
     */
    where: ResultatWhereUniqueInput
  }

  /**
   * Resultat deleteMany
   */
  export type ResultatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resultats to delete
     */
    where?: ResultatWhereInput
    /**
     * Limit how many Resultats to delete.
     */
    limit?: number
  }

  /**
   * Resultat without action
   */
  export type ResultatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultat
     */
    select?: ResultatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultat
     */
    omit?: ResultatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultatInclude<ExtArgs> | null
  }


  /**
   * Model Mark
   */

  export type AggregateMark = {
    _count: MarkCountAggregateOutputType | null
    _avg: MarkAvgAggregateOutputType | null
    _sum: MarkSumAggregateOutputType | null
    _min: MarkMinAggregateOutputType | null
    _max: MarkMaxAggregateOutputType | null
  }

  export type MarkAvgAggregateOutputType = {
    id: number | null
    candidatId: number | null
    red: number | null
    dic: number | null
    tsq: number | null
    svt: number | null
    lv1: number | null
    mat: number | null
    hg: number | null
    ec: number | null
    sp: number | null
    part: number | null
    orale: number | null
  }

  export type MarkSumAggregateOutputType = {
    id: number | null
    candidatId: number | null
    red: number | null
    dic: number | null
    tsq: number | null
    svt: number | null
    lv1: number | null
    mat: number | null
    hg: number | null
    ec: number | null
    sp: number | null
    part: number | null
    orale: number | null
  }

  export type MarkMinAggregateOutputType = {
    id: number | null
    candidatId: number | null
    numcorrection: string | null
    red: number | null
    dic: number | null
    tsq: number | null
    svt: number | null
    lv1: number | null
    mat: number | null
    hg: number | null
    ec: number | null
    sp: number | null
    part: number | null
    orale: number | null
  }

  export type MarkMaxAggregateOutputType = {
    id: number | null
    candidatId: number | null
    numcorrection: string | null
    red: number | null
    dic: number | null
    tsq: number | null
    svt: number | null
    lv1: number | null
    mat: number | null
    hg: number | null
    ec: number | null
    sp: number | null
    part: number | null
    orale: number | null
  }

  export type MarkCountAggregateOutputType = {
    id: number
    candidatId: number
    numcorrection: number
    red: number
    dic: number
    tsq: number
    svt: number
    lv1: number
    mat: number
    hg: number
    ec: number
    sp: number
    part: number
    orale: number
    _all: number
  }


  export type MarkAvgAggregateInputType = {
    id?: true
    candidatId?: true
    red?: true
    dic?: true
    tsq?: true
    svt?: true
    lv1?: true
    mat?: true
    hg?: true
    ec?: true
    sp?: true
    part?: true
    orale?: true
  }

  export type MarkSumAggregateInputType = {
    id?: true
    candidatId?: true
    red?: true
    dic?: true
    tsq?: true
    svt?: true
    lv1?: true
    mat?: true
    hg?: true
    ec?: true
    sp?: true
    part?: true
    orale?: true
  }

  export type MarkMinAggregateInputType = {
    id?: true
    candidatId?: true
    numcorrection?: true
    red?: true
    dic?: true
    tsq?: true
    svt?: true
    lv1?: true
    mat?: true
    hg?: true
    ec?: true
    sp?: true
    part?: true
    orale?: true
  }

  export type MarkMaxAggregateInputType = {
    id?: true
    candidatId?: true
    numcorrection?: true
    red?: true
    dic?: true
    tsq?: true
    svt?: true
    lv1?: true
    mat?: true
    hg?: true
    ec?: true
    sp?: true
    part?: true
    orale?: true
  }

  export type MarkCountAggregateInputType = {
    id?: true
    candidatId?: true
    numcorrection?: true
    red?: true
    dic?: true
    tsq?: true
    svt?: true
    lv1?: true
    mat?: true
    hg?: true
    ec?: true
    sp?: true
    part?: true
    orale?: true
    _all?: true
  }

  export type MarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mark to aggregate.
     */
    where?: MarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Marks
    **/
    _count?: true | MarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarkMaxAggregateInputType
  }

  export type GetMarkAggregateType<T extends MarkAggregateArgs> = {
        [P in keyof T & keyof AggregateMark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMark[P]>
      : GetScalarType<T[P], AggregateMark[P]>
  }




  export type MarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarkWhereInput
    orderBy?: MarkOrderByWithAggregationInput | MarkOrderByWithAggregationInput[]
    by: MarkScalarFieldEnum[] | MarkScalarFieldEnum
    having?: MarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarkCountAggregateInputType | true
    _avg?: MarkAvgAggregateInputType
    _sum?: MarkSumAggregateInputType
    _min?: MarkMinAggregateInputType
    _max?: MarkMaxAggregateInputType
  }

  export type MarkGroupByOutputType = {
    id: number
    candidatId: number
    numcorrection: string
    red: number
    dic: number
    tsq: number
    svt: number
    lv1: number
    mat: number
    hg: number
    ec: number
    sp: number
    part: number
    orale: number
    _count: MarkCountAggregateOutputType | null
    _avg: MarkAvgAggregateOutputType | null
    _sum: MarkSumAggregateOutputType | null
    _min: MarkMinAggregateOutputType | null
    _max: MarkMaxAggregateOutputType | null
  }

  type GetMarkGroupByPayload<T extends MarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarkGroupByOutputType[P]>
            : GetScalarType<T[P], MarkGroupByOutputType[P]>
        }
      >
    >


  export type MarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidatId?: boolean
    numcorrection?: boolean
    red?: boolean
    dic?: boolean
    tsq?: boolean
    svt?: boolean
    lv1?: boolean
    mat?: boolean
    hg?: boolean
    ec?: boolean
    sp?: boolean
    part?: boolean
    orale?: boolean
    candidat?: boolean | CandidatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mark"]>

  export type MarkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidatId?: boolean
    numcorrection?: boolean
    red?: boolean
    dic?: boolean
    tsq?: boolean
    svt?: boolean
    lv1?: boolean
    mat?: boolean
    hg?: boolean
    ec?: boolean
    sp?: boolean
    part?: boolean
    orale?: boolean
    candidat?: boolean | CandidatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mark"]>

  export type MarkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidatId?: boolean
    numcorrection?: boolean
    red?: boolean
    dic?: boolean
    tsq?: boolean
    svt?: boolean
    lv1?: boolean
    mat?: boolean
    hg?: boolean
    ec?: boolean
    sp?: boolean
    part?: boolean
    orale?: boolean
    candidat?: boolean | CandidatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mark"]>

  export type MarkSelectScalar = {
    id?: boolean
    candidatId?: boolean
    numcorrection?: boolean
    red?: boolean
    dic?: boolean
    tsq?: boolean
    svt?: boolean
    lv1?: boolean
    mat?: boolean
    hg?: boolean
    ec?: boolean
    sp?: boolean
    part?: boolean
    orale?: boolean
  }

  export type MarkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "candidatId" | "numcorrection" | "red" | "dic" | "tsq" | "svt" | "lv1" | "mat" | "hg" | "ec" | "sp" | "part" | "orale", ExtArgs["result"]["mark"]>
  export type MarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidat?: boolean | CandidatDefaultArgs<ExtArgs>
  }
  export type MarkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidat?: boolean | CandidatDefaultArgs<ExtArgs>
  }
  export type MarkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidat?: boolean | CandidatDefaultArgs<ExtArgs>
  }

  export type $MarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mark"
    objects: {
      candidat: Prisma.$CandidatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      candidatId: number
      numcorrection: string
      red: number
      dic: number
      tsq: number
      svt: number
      lv1: number
      mat: number
      hg: number
      ec: number
      sp: number
      part: number
      orale: number
    }, ExtArgs["result"]["mark"]>
    composites: {}
  }

  type MarkGetPayload<S extends boolean | null | undefined | MarkDefaultArgs> = $Result.GetResult<Prisma.$MarkPayload, S>

  type MarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarkCountAggregateInputType | true
    }

  export interface MarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mark'], meta: { name: 'Mark' } }
    /**
     * Find zero or one Mark that matches the filter.
     * @param {MarkFindUniqueArgs} args - Arguments to find a Mark
     * @example
     * // Get one Mark
     * const mark = await prisma.mark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarkFindUniqueArgs>(args: SelectSubset<T, MarkFindUniqueArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mark that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarkFindUniqueOrThrowArgs} args - Arguments to find a Mark
     * @example
     * // Get one Mark
     * const mark = await prisma.mark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarkFindUniqueOrThrowArgs>(args: SelectSubset<T, MarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkFindFirstArgs} args - Arguments to find a Mark
     * @example
     * // Get one Mark
     * const mark = await prisma.mark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarkFindFirstArgs>(args?: SelectSubset<T, MarkFindFirstArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkFindFirstOrThrowArgs} args - Arguments to find a Mark
     * @example
     * // Get one Mark
     * const mark = await prisma.mark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarkFindFirstOrThrowArgs>(args?: SelectSubset<T, MarkFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Marks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Marks
     * const marks = await prisma.mark.findMany()
     * 
     * // Get first 10 Marks
     * const marks = await prisma.mark.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const markWithIdOnly = await prisma.mark.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarkFindManyArgs>(args?: SelectSubset<T, MarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mark.
     * @param {MarkCreateArgs} args - Arguments to create a Mark.
     * @example
     * // Create one Mark
     * const Mark = await prisma.mark.create({
     *   data: {
     *     // ... data to create a Mark
     *   }
     * })
     * 
     */
    create<T extends MarkCreateArgs>(args: SelectSubset<T, MarkCreateArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Marks.
     * @param {MarkCreateManyArgs} args - Arguments to create many Marks.
     * @example
     * // Create many Marks
     * const mark = await prisma.mark.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarkCreateManyArgs>(args?: SelectSubset<T, MarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Marks and returns the data saved in the database.
     * @param {MarkCreateManyAndReturnArgs} args - Arguments to create many Marks.
     * @example
     * // Create many Marks
     * const mark = await prisma.mark.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Marks and only return the `id`
     * const markWithIdOnly = await prisma.mark.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarkCreateManyAndReturnArgs>(args?: SelectSubset<T, MarkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mark.
     * @param {MarkDeleteArgs} args - Arguments to delete one Mark.
     * @example
     * // Delete one Mark
     * const Mark = await prisma.mark.delete({
     *   where: {
     *     // ... filter to delete one Mark
     *   }
     * })
     * 
     */
    delete<T extends MarkDeleteArgs>(args: SelectSubset<T, MarkDeleteArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mark.
     * @param {MarkUpdateArgs} args - Arguments to update one Mark.
     * @example
     * // Update one Mark
     * const mark = await prisma.mark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarkUpdateArgs>(args: SelectSubset<T, MarkUpdateArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Marks.
     * @param {MarkDeleteManyArgs} args - Arguments to filter Marks to delete.
     * @example
     * // Delete a few Marks
     * const { count } = await prisma.mark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarkDeleteManyArgs>(args?: SelectSubset<T, MarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Marks
     * const mark = await prisma.mark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarkUpdateManyArgs>(args: SelectSubset<T, MarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marks and returns the data updated in the database.
     * @param {MarkUpdateManyAndReturnArgs} args - Arguments to update many Marks.
     * @example
     * // Update many Marks
     * const mark = await prisma.mark.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Marks and only return the `id`
     * const markWithIdOnly = await prisma.mark.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarkUpdateManyAndReturnArgs>(args: SelectSubset<T, MarkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mark.
     * @param {MarkUpsertArgs} args - Arguments to update or create a Mark.
     * @example
     * // Update or create a Mark
     * const mark = await prisma.mark.upsert({
     *   create: {
     *     // ... data to create a Mark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mark we want to update
     *   }
     * })
     */
    upsert<T extends MarkUpsertArgs>(args: SelectSubset<T, MarkUpsertArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkCountArgs} args - Arguments to filter Marks to count.
     * @example
     * // Count the number of Marks
     * const count = await prisma.mark.count({
     *   where: {
     *     // ... the filter for the Marks we want to count
     *   }
     * })
    **/
    count<T extends MarkCountArgs>(
      args?: Subset<T, MarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarkAggregateArgs>(args: Subset<T, MarkAggregateArgs>): Prisma.PrismaPromise<GetMarkAggregateType<T>>

    /**
     * Group by Mark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarkGroupByArgs['orderBy'] }
        : { orderBy?: MarkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mark model
   */
  readonly fields: MarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidat<T extends CandidatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidatDefaultArgs<ExtArgs>>): Prisma__CandidatClient<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mark model
   */
  interface MarkFieldRefs {
    readonly id: FieldRef<"Mark", 'Int'>
    readonly candidatId: FieldRef<"Mark", 'Int'>
    readonly numcorrection: FieldRef<"Mark", 'String'>
    readonly red: FieldRef<"Mark", 'Float'>
    readonly dic: FieldRef<"Mark", 'Float'>
    readonly tsq: FieldRef<"Mark", 'Float'>
    readonly svt: FieldRef<"Mark", 'Float'>
    readonly lv1: FieldRef<"Mark", 'Float'>
    readonly mat: FieldRef<"Mark", 'Float'>
    readonly hg: FieldRef<"Mark", 'Float'>
    readonly ec: FieldRef<"Mark", 'Float'>
    readonly sp: FieldRef<"Mark", 'Float'>
    readonly part: FieldRef<"Mark", 'Float'>
    readonly orale: FieldRef<"Mark", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Mark findUnique
   */
  export type MarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter, which Mark to fetch.
     */
    where: MarkWhereUniqueInput
  }

  /**
   * Mark findUniqueOrThrow
   */
  export type MarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter, which Mark to fetch.
     */
    where: MarkWhereUniqueInput
  }

  /**
   * Mark findFirst
   */
  export type MarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter, which Mark to fetch.
     */
    where?: MarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marks.
     */
    cursor?: MarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marks.
     */
    distinct?: MarkScalarFieldEnum | MarkScalarFieldEnum[]
  }

  /**
   * Mark findFirstOrThrow
   */
  export type MarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter, which Mark to fetch.
     */
    where?: MarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marks.
     */
    cursor?: MarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marks.
     */
    distinct?: MarkScalarFieldEnum | MarkScalarFieldEnum[]
  }

  /**
   * Mark findMany
   */
  export type MarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter, which Marks to fetch.
     */
    where?: MarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Marks.
     */
    cursor?: MarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    distinct?: MarkScalarFieldEnum | MarkScalarFieldEnum[]
  }

  /**
   * Mark create
   */
  export type MarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * The data needed to create a Mark.
     */
    data: XOR<MarkCreateInput, MarkUncheckedCreateInput>
  }

  /**
   * Mark createMany
   */
  export type MarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Marks.
     */
    data: MarkCreateManyInput | MarkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mark createManyAndReturn
   */
  export type MarkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * The data used to create many Marks.
     */
    data: MarkCreateManyInput | MarkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mark update
   */
  export type MarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * The data needed to update a Mark.
     */
    data: XOR<MarkUpdateInput, MarkUncheckedUpdateInput>
    /**
     * Choose, which Mark to update.
     */
    where: MarkWhereUniqueInput
  }

  /**
   * Mark updateMany
   */
  export type MarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Marks.
     */
    data: XOR<MarkUpdateManyMutationInput, MarkUncheckedUpdateManyInput>
    /**
     * Filter which Marks to update
     */
    where?: MarkWhereInput
    /**
     * Limit how many Marks to update.
     */
    limit?: number
  }

  /**
   * Mark updateManyAndReturn
   */
  export type MarkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * The data used to update Marks.
     */
    data: XOR<MarkUpdateManyMutationInput, MarkUncheckedUpdateManyInput>
    /**
     * Filter which Marks to update
     */
    where?: MarkWhereInput
    /**
     * Limit how many Marks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mark upsert
   */
  export type MarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * The filter to search for the Mark to update in case it exists.
     */
    where: MarkWhereUniqueInput
    /**
     * In case the Mark found by the `where` argument doesn't exist, create a new Mark with this data.
     */
    create: XOR<MarkCreateInput, MarkUncheckedCreateInput>
    /**
     * In case the Mark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarkUpdateInput, MarkUncheckedUpdateInput>
  }

  /**
   * Mark delete
   */
  export type MarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter which Mark to delete.
     */
    where: MarkWhereUniqueInput
  }

  /**
   * Mark deleteMany
   */
  export type MarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marks to delete
     */
    where?: MarkWhereInput
    /**
     * Limit how many Marks to delete.
     */
    limit?: number
  }

  /**
   * Mark without action
   */
  export type MarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ContactScalarFieldEnum: {
    id: 'id',
    prenom: 'prenom',
    nom: 'nom',
    email: 'email',
    description: 'description',
    phone: 'phone',
    adresse: 'adresse',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    content: 'content',
    published: 'published',
    authorId: 'authorId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const CandidatScalarFieldEnum: {
    id: 'id',
    prenoms: 'prenoms',
    nom: 'nom',
    date_naissance: 'date_naissance',
    lieu_naissance: 'lieu_naissance',
    sexe: 'sexe',
    aptitude: 'aptitude',
    section: 'section',
    option: 'option',
    etat: 'etat',
    etablissement_id: 'etablissement_id'
  };

  export type CandidatScalarFieldEnum = (typeof CandidatScalarFieldEnum)[keyof typeof CandidatScalarFieldEnum]


  export const AnonymatScalarFieldEnum: {
    id: 'id',
    code: 'code',
    candidatId: 'candidatId'
  };

  export type AnonymatScalarFieldEnum = (typeof AnonymatScalarFieldEnum)[keyof typeof AnonymatScalarFieldEnum]


  export const ZoneScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    responsable: 'responsable',
    contact: 'contact'
  };

  export type ZoneScalarFieldEnum = (typeof ZoneScalarFieldEnum)[keyof typeof ZoneScalarFieldEnum]


  export const CentreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    contact: 'contact',
    zoneId: 'zoneId'
  };

  export type CentreScalarFieldEnum = (typeof CentreScalarFieldEnum)[keyof typeof CentreScalarFieldEnum]


  export const EtablissementScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    zoneId: 'zoneId'
  };

  export type EtablissementScalarFieldEnum = (typeof EtablissementScalarFieldEnum)[keyof typeof EtablissementScalarFieldEnum]


  export const GroupeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    total: 'total'
  };

  export type GroupeScalarFieldEnum = (typeof GroupeScalarFieldEnum)[keyof typeof GroupeScalarFieldEnum]


  export const JuryScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    centre_id: 'centre_id',
    president: 'president'
  };

  export type JuryScalarFieldEnum = (typeof JuryScalarFieldEnum)[keyof typeof JuryScalarFieldEnum]


  export const MatiereScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    coefficient: 'coefficient'
  };

  export type MatiereScalarFieldEnum = (typeof MatiereScalarFieldEnum)[keyof typeof MatiereScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    id: 'id',
    candidat_id: 'candidat_id',
    matiere_id: 'matiere_id',
    score: 'score',
    groupe_id: 'groupe_id'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const ResultatScalarFieldEnum: {
    id: 'id',
    candidat_id: 'candidat_id',
    total: 'total',
    moyenne: 'moyenne',
    rang: 'rang'
  };

  export type ResultatScalarFieldEnum = (typeof ResultatScalarFieldEnum)[keyof typeof ResultatScalarFieldEnum]


  export const MarkScalarFieldEnum: {
    id: 'id',
    candidatId: 'candidatId',
    numcorrection: 'numcorrection',
    red: 'red',
    dic: 'dic',
    tsq: 'tsq',
    svt: 'svt',
    lv1: 'lv1',
    mat: 'mat',
    hg: 'hg',
    ec: 'ec',
    sp: 'sp',
    part: 'part',
    orale: 'orale'
  };

  export type MarkScalarFieldEnum = (typeof MarkScalarFieldEnum)[keyof typeof MarkScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: IntFilter<"Contact"> | number
    prenom?: StringFilter<"Contact"> | string
    nom?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    description?: StringNullableFilter<"Contact"> | string | null
    phone?: StringNullableFilter<"Contact"> | string | null
    adresse?: StringNullableFilter<"Contact"> | string | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    description?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    adresse?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    prenom?: StringFilter<"Contact"> | string
    nom?: StringFilter<"Contact"> | string
    description?: StringNullableFilter<"Contact"> | string | null
    phone?: StringNullableFilter<"Contact"> | string | null
    adresse?: StringNullableFilter<"Contact"> | string | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
  }, "id" | "email">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    description?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    adresse?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contact"> | number
    prenom?: StringWithAggregatesFilter<"Contact"> | string
    nom?: StringWithAggregatesFilter<"Contact"> | string
    email?: StringWithAggregatesFilter<"Contact"> | string
    description?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    adresse?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    slug?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
    published?: BoolFilter<"Post"> | boolean
    authorId?: StringFilter<"Post"> | string
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrderInput | SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    slug?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
    published?: BoolFilter<"Post"> | boolean
    authorId?: StringFilter<"Post"> | string
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrderInput | SortOrder
    published?: SortOrder
    authorId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    title?: StringWithAggregatesFilter<"Post"> | string
    slug?: StringWithAggregatesFilter<"Post"> | string
    content?: StringNullableWithAggregatesFilter<"Post"> | string | null
    published?: BoolWithAggregatesFilter<"Post"> | boolean
    authorId?: StringWithAggregatesFilter<"Post"> | string
  }

  export type CandidatWhereInput = {
    AND?: CandidatWhereInput | CandidatWhereInput[]
    OR?: CandidatWhereInput[]
    NOT?: CandidatWhereInput | CandidatWhereInput[]
    id?: IntFilter<"Candidat"> | number
    prenoms?: StringFilter<"Candidat"> | string
    nom?: StringFilter<"Candidat"> | string
    date_naissance?: DateTimeFilter<"Candidat"> | Date | string
    lieu_naissance?: StringFilter<"Candidat"> | string
    sexe?: StringFilter<"Candidat"> | string
    aptitude?: StringFilter<"Candidat"> | string
    section?: StringFilter<"Candidat"> | string
    option?: StringFilter<"Candidat"> | string
    etat?: BoolFilter<"Candidat"> | boolean
    etablissement_id?: IntFilter<"Candidat"> | number
    etablissement?: XOR<EtablissementScalarRelationFilter, EtablissementWhereInput>
    notes?: NoteListRelationFilter
    resultats?: ResultatListRelationFilter
    Anonymat?: XOR<AnonymatNullableScalarRelationFilter, AnonymatWhereInput> | null
    mark?: XOR<MarkNullableScalarRelationFilter, MarkWhereInput> | null
  }

  export type CandidatOrderByWithRelationInput = {
    id?: SortOrder
    prenoms?: SortOrder
    nom?: SortOrder
    date_naissance?: SortOrder
    lieu_naissance?: SortOrder
    sexe?: SortOrder
    aptitude?: SortOrder
    section?: SortOrder
    option?: SortOrder
    etat?: SortOrder
    etablissement_id?: SortOrder
    etablissement?: EtablissementOrderByWithRelationInput
    notes?: NoteOrderByRelationAggregateInput
    resultats?: ResultatOrderByRelationAggregateInput
    Anonymat?: AnonymatOrderByWithRelationInput
    mark?: MarkOrderByWithRelationInput
  }

  export type CandidatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CandidatWhereInput | CandidatWhereInput[]
    OR?: CandidatWhereInput[]
    NOT?: CandidatWhereInput | CandidatWhereInput[]
    prenoms?: StringFilter<"Candidat"> | string
    nom?: StringFilter<"Candidat"> | string
    date_naissance?: DateTimeFilter<"Candidat"> | Date | string
    lieu_naissance?: StringFilter<"Candidat"> | string
    sexe?: StringFilter<"Candidat"> | string
    aptitude?: StringFilter<"Candidat"> | string
    section?: StringFilter<"Candidat"> | string
    option?: StringFilter<"Candidat"> | string
    etat?: BoolFilter<"Candidat"> | boolean
    etablissement_id?: IntFilter<"Candidat"> | number
    etablissement?: XOR<EtablissementScalarRelationFilter, EtablissementWhereInput>
    notes?: NoteListRelationFilter
    resultats?: ResultatListRelationFilter
    Anonymat?: XOR<AnonymatNullableScalarRelationFilter, AnonymatWhereInput> | null
    mark?: XOR<MarkNullableScalarRelationFilter, MarkWhereInput> | null
  }, "id">

  export type CandidatOrderByWithAggregationInput = {
    id?: SortOrder
    prenoms?: SortOrder
    nom?: SortOrder
    date_naissance?: SortOrder
    lieu_naissance?: SortOrder
    sexe?: SortOrder
    aptitude?: SortOrder
    section?: SortOrder
    option?: SortOrder
    etat?: SortOrder
    etablissement_id?: SortOrder
    _count?: CandidatCountOrderByAggregateInput
    _avg?: CandidatAvgOrderByAggregateInput
    _max?: CandidatMaxOrderByAggregateInput
    _min?: CandidatMinOrderByAggregateInput
    _sum?: CandidatSumOrderByAggregateInput
  }

  export type CandidatScalarWhereWithAggregatesInput = {
    AND?: CandidatScalarWhereWithAggregatesInput | CandidatScalarWhereWithAggregatesInput[]
    OR?: CandidatScalarWhereWithAggregatesInput[]
    NOT?: CandidatScalarWhereWithAggregatesInput | CandidatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Candidat"> | number
    prenoms?: StringWithAggregatesFilter<"Candidat"> | string
    nom?: StringWithAggregatesFilter<"Candidat"> | string
    date_naissance?: DateTimeWithAggregatesFilter<"Candidat"> | Date | string
    lieu_naissance?: StringWithAggregatesFilter<"Candidat"> | string
    sexe?: StringWithAggregatesFilter<"Candidat"> | string
    aptitude?: StringWithAggregatesFilter<"Candidat"> | string
    section?: StringWithAggregatesFilter<"Candidat"> | string
    option?: StringWithAggregatesFilter<"Candidat"> | string
    etat?: BoolWithAggregatesFilter<"Candidat"> | boolean
    etablissement_id?: IntWithAggregatesFilter<"Candidat"> | number
  }

  export type AnonymatWhereInput = {
    AND?: AnonymatWhereInput | AnonymatWhereInput[]
    OR?: AnonymatWhereInput[]
    NOT?: AnonymatWhereInput | AnonymatWhereInput[]
    id?: IntFilter<"Anonymat"> | number
    code?: StringFilter<"Anonymat"> | string
    candidatId?: IntFilter<"Anonymat"> | number
    candidat?: XOR<CandidatScalarRelationFilter, CandidatWhereInput>
  }

  export type AnonymatOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    candidatId?: SortOrder
    candidat?: CandidatOrderByWithRelationInput
  }

  export type AnonymatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    candidatId?: number
    AND?: AnonymatWhereInput | AnonymatWhereInput[]
    OR?: AnonymatWhereInput[]
    NOT?: AnonymatWhereInput | AnonymatWhereInput[]
    candidat?: XOR<CandidatScalarRelationFilter, CandidatWhereInput>
  }, "id" | "code" | "candidatId">

  export type AnonymatOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    candidatId?: SortOrder
    _count?: AnonymatCountOrderByAggregateInput
    _avg?: AnonymatAvgOrderByAggregateInput
    _max?: AnonymatMaxOrderByAggregateInput
    _min?: AnonymatMinOrderByAggregateInput
    _sum?: AnonymatSumOrderByAggregateInput
  }

  export type AnonymatScalarWhereWithAggregatesInput = {
    AND?: AnonymatScalarWhereWithAggregatesInput | AnonymatScalarWhereWithAggregatesInput[]
    OR?: AnonymatScalarWhereWithAggregatesInput[]
    NOT?: AnonymatScalarWhereWithAggregatesInput | AnonymatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Anonymat"> | number
    code?: StringWithAggregatesFilter<"Anonymat"> | string
    candidatId?: IntWithAggregatesFilter<"Anonymat"> | number
  }

  export type ZoneWhereInput = {
    AND?: ZoneWhereInput | ZoneWhereInput[]
    OR?: ZoneWhereInput[]
    NOT?: ZoneWhereInput | ZoneWhereInput[]
    id?: IntFilter<"Zone"> | number
    name?: StringFilter<"Zone"> | string
    slug?: StringFilter<"Zone"> | string
    responsable?: StringFilter<"Zone"> | string
    contact?: StringFilter<"Zone"> | string
    centres?: CentreListRelationFilter
    etablissements?: EtablissementListRelationFilter
  }

  export type ZoneOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    responsable?: SortOrder
    contact?: SortOrder
    centres?: CentreOrderByRelationAggregateInput
    etablissements?: EtablissementOrderByRelationAggregateInput
  }

  export type ZoneWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ZoneWhereInput | ZoneWhereInput[]
    OR?: ZoneWhereInput[]
    NOT?: ZoneWhereInput | ZoneWhereInput[]
    name?: StringFilter<"Zone"> | string
    slug?: StringFilter<"Zone"> | string
    responsable?: StringFilter<"Zone"> | string
    contact?: StringFilter<"Zone"> | string
    centres?: CentreListRelationFilter
    etablissements?: EtablissementListRelationFilter
  }, "id">

  export type ZoneOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    responsable?: SortOrder
    contact?: SortOrder
    _count?: ZoneCountOrderByAggregateInput
    _avg?: ZoneAvgOrderByAggregateInput
    _max?: ZoneMaxOrderByAggregateInput
    _min?: ZoneMinOrderByAggregateInput
    _sum?: ZoneSumOrderByAggregateInput
  }

  export type ZoneScalarWhereWithAggregatesInput = {
    AND?: ZoneScalarWhereWithAggregatesInput | ZoneScalarWhereWithAggregatesInput[]
    OR?: ZoneScalarWhereWithAggregatesInput[]
    NOT?: ZoneScalarWhereWithAggregatesInput | ZoneScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Zone"> | number
    name?: StringWithAggregatesFilter<"Zone"> | string
    slug?: StringWithAggregatesFilter<"Zone"> | string
    responsable?: StringWithAggregatesFilter<"Zone"> | string
    contact?: StringWithAggregatesFilter<"Zone"> | string
  }

  export type CentreWhereInput = {
    AND?: CentreWhereInput | CentreWhereInput[]
    OR?: CentreWhereInput[]
    NOT?: CentreWhereInput | CentreWhereInput[]
    id?: IntFilter<"Centre"> | number
    name?: StringNullableFilter<"Centre"> | string | null
    slug?: StringNullableFilter<"Centre"> | string | null
    contact?: StringNullableFilter<"Centre"> | string | null
    zoneId?: IntFilter<"Centre"> | number
    zone?: XOR<ZoneScalarRelationFilter, ZoneWhereInput>
    jurys?: JuryListRelationFilter
  }

  export type CentreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    zoneId?: SortOrder
    zone?: ZoneOrderByWithRelationInput
    jurys?: JuryOrderByRelationAggregateInput
  }

  export type CentreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CentreWhereInput | CentreWhereInput[]
    OR?: CentreWhereInput[]
    NOT?: CentreWhereInput | CentreWhereInput[]
    name?: StringNullableFilter<"Centre"> | string | null
    slug?: StringNullableFilter<"Centre"> | string | null
    contact?: StringNullableFilter<"Centre"> | string | null
    zoneId?: IntFilter<"Centre"> | number
    zone?: XOR<ZoneScalarRelationFilter, ZoneWhereInput>
    jurys?: JuryListRelationFilter
  }, "id">

  export type CentreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    zoneId?: SortOrder
    _count?: CentreCountOrderByAggregateInput
    _avg?: CentreAvgOrderByAggregateInput
    _max?: CentreMaxOrderByAggregateInput
    _min?: CentreMinOrderByAggregateInput
    _sum?: CentreSumOrderByAggregateInput
  }

  export type CentreScalarWhereWithAggregatesInput = {
    AND?: CentreScalarWhereWithAggregatesInput | CentreScalarWhereWithAggregatesInput[]
    OR?: CentreScalarWhereWithAggregatesInput[]
    NOT?: CentreScalarWhereWithAggregatesInput | CentreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Centre"> | number
    name?: StringNullableWithAggregatesFilter<"Centre"> | string | null
    slug?: StringNullableWithAggregatesFilter<"Centre"> | string | null
    contact?: StringNullableWithAggregatesFilter<"Centre"> | string | null
    zoneId?: IntWithAggregatesFilter<"Centre"> | number
  }

  export type EtablissementWhereInput = {
    AND?: EtablissementWhereInput | EtablissementWhereInput[]
    OR?: EtablissementWhereInput[]
    NOT?: EtablissementWhereInput | EtablissementWhereInput[]
    id?: IntFilter<"Etablissement"> | number
    name?: StringFilter<"Etablissement"> | string
    slug?: StringFilter<"Etablissement"> | string
    zoneId?: IntFilter<"Etablissement"> | number
    zone?: XOR<ZoneScalarRelationFilter, ZoneWhereInput>
    candidats?: CandidatListRelationFilter
  }

  export type EtablissementOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    zoneId?: SortOrder
    zone?: ZoneOrderByWithRelationInput
    candidats?: CandidatOrderByRelationAggregateInput
  }

  export type EtablissementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: EtablissementWhereInput | EtablissementWhereInput[]
    OR?: EtablissementWhereInput[]
    NOT?: EtablissementWhereInput | EtablissementWhereInput[]
    name?: StringFilter<"Etablissement"> | string
    zoneId?: IntFilter<"Etablissement"> | number
    zone?: XOR<ZoneScalarRelationFilter, ZoneWhereInput>
    candidats?: CandidatListRelationFilter
  }, "id" | "slug">

  export type EtablissementOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    zoneId?: SortOrder
    _count?: EtablissementCountOrderByAggregateInput
    _avg?: EtablissementAvgOrderByAggregateInput
    _max?: EtablissementMaxOrderByAggregateInput
    _min?: EtablissementMinOrderByAggregateInput
    _sum?: EtablissementSumOrderByAggregateInput
  }

  export type EtablissementScalarWhereWithAggregatesInput = {
    AND?: EtablissementScalarWhereWithAggregatesInput | EtablissementScalarWhereWithAggregatesInput[]
    OR?: EtablissementScalarWhereWithAggregatesInput[]
    NOT?: EtablissementScalarWhereWithAggregatesInput | EtablissementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Etablissement"> | number
    name?: StringWithAggregatesFilter<"Etablissement"> | string
    slug?: StringWithAggregatesFilter<"Etablissement"> | string
    zoneId?: IntWithAggregatesFilter<"Etablissement"> | number
  }

  export type GroupeWhereInput = {
    AND?: GroupeWhereInput | GroupeWhereInput[]
    OR?: GroupeWhereInput[]
    NOT?: GroupeWhereInput | GroupeWhereInput[]
    id?: IntFilter<"Groupe"> | number
    name?: StringFilter<"Groupe"> | string
    slug?: StringFilter<"Groupe"> | string
    total?: FloatFilter<"Groupe"> | number
  }

  export type GroupeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    total?: SortOrder
  }

  export type GroupeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GroupeWhereInput | GroupeWhereInput[]
    OR?: GroupeWhereInput[]
    NOT?: GroupeWhereInput | GroupeWhereInput[]
    name?: StringFilter<"Groupe"> | string
    slug?: StringFilter<"Groupe"> | string
    total?: FloatFilter<"Groupe"> | number
  }, "id">

  export type GroupeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    total?: SortOrder
    _count?: GroupeCountOrderByAggregateInput
    _avg?: GroupeAvgOrderByAggregateInput
    _max?: GroupeMaxOrderByAggregateInput
    _min?: GroupeMinOrderByAggregateInput
    _sum?: GroupeSumOrderByAggregateInput
  }

  export type GroupeScalarWhereWithAggregatesInput = {
    AND?: GroupeScalarWhereWithAggregatesInput | GroupeScalarWhereWithAggregatesInput[]
    OR?: GroupeScalarWhereWithAggregatesInput[]
    NOT?: GroupeScalarWhereWithAggregatesInput | GroupeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Groupe"> | number
    name?: StringWithAggregatesFilter<"Groupe"> | string
    slug?: StringWithAggregatesFilter<"Groupe"> | string
    total?: FloatWithAggregatesFilter<"Groupe"> | number
  }

  export type JuryWhereInput = {
    AND?: JuryWhereInput | JuryWhereInput[]
    OR?: JuryWhereInput[]
    NOT?: JuryWhereInput | JuryWhereInput[]
    id?: IntFilter<"Jury"> | number
    numero?: IntFilter<"Jury"> | number
    centre_id?: IntNullableFilter<"Jury"> | number | null
    president?: StringNullableFilter<"Jury"> | string | null
    centre?: XOR<CentreNullableScalarRelationFilter, CentreWhereInput> | null
  }

  export type JuryOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    centre_id?: SortOrderInput | SortOrder
    president?: SortOrderInput | SortOrder
    centre?: CentreOrderByWithRelationInput
  }

  export type JuryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JuryWhereInput | JuryWhereInput[]
    OR?: JuryWhereInput[]
    NOT?: JuryWhereInput | JuryWhereInput[]
    numero?: IntFilter<"Jury"> | number
    centre_id?: IntNullableFilter<"Jury"> | number | null
    president?: StringNullableFilter<"Jury"> | string | null
    centre?: XOR<CentreNullableScalarRelationFilter, CentreWhereInput> | null
  }, "id">

  export type JuryOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    centre_id?: SortOrderInput | SortOrder
    president?: SortOrderInput | SortOrder
    _count?: JuryCountOrderByAggregateInput
    _avg?: JuryAvgOrderByAggregateInput
    _max?: JuryMaxOrderByAggregateInput
    _min?: JuryMinOrderByAggregateInput
    _sum?: JurySumOrderByAggregateInput
  }

  export type JuryScalarWhereWithAggregatesInput = {
    AND?: JuryScalarWhereWithAggregatesInput | JuryScalarWhereWithAggregatesInput[]
    OR?: JuryScalarWhereWithAggregatesInput[]
    NOT?: JuryScalarWhereWithAggregatesInput | JuryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Jury"> | number
    numero?: IntWithAggregatesFilter<"Jury"> | number
    centre_id?: IntNullableWithAggregatesFilter<"Jury"> | number | null
    president?: StringNullableWithAggregatesFilter<"Jury"> | string | null
  }

  export type MatiereWhereInput = {
    AND?: MatiereWhereInput | MatiereWhereInput[]
    OR?: MatiereWhereInput[]
    NOT?: MatiereWhereInput | MatiereWhereInput[]
    id?: IntFilter<"Matiere"> | number
    name?: StringNullableFilter<"Matiere"> | string | null
    slug?: IntNullableFilter<"Matiere"> | number | null
    coefficient?: IntFilter<"Matiere"> | number
    notes?: NoteListRelationFilter
  }

  export type MatiereOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    coefficient?: SortOrder
    notes?: NoteOrderByRelationAggregateInput
  }

  export type MatiereWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: MatiereWhereInput | MatiereWhereInput[]
    OR?: MatiereWhereInput[]
    NOT?: MatiereWhereInput | MatiereWhereInput[]
    slug?: IntNullableFilter<"Matiere"> | number | null
    coefficient?: IntFilter<"Matiere"> | number
    notes?: NoteListRelationFilter
  }, "id" | "name">

  export type MatiereOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    coefficient?: SortOrder
    _count?: MatiereCountOrderByAggregateInput
    _avg?: MatiereAvgOrderByAggregateInput
    _max?: MatiereMaxOrderByAggregateInput
    _min?: MatiereMinOrderByAggregateInput
    _sum?: MatiereSumOrderByAggregateInput
  }

  export type MatiereScalarWhereWithAggregatesInput = {
    AND?: MatiereScalarWhereWithAggregatesInput | MatiereScalarWhereWithAggregatesInput[]
    OR?: MatiereScalarWhereWithAggregatesInput[]
    NOT?: MatiereScalarWhereWithAggregatesInput | MatiereScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Matiere"> | number
    name?: StringNullableWithAggregatesFilter<"Matiere"> | string | null
    slug?: IntNullableWithAggregatesFilter<"Matiere"> | number | null
    coefficient?: IntWithAggregatesFilter<"Matiere"> | number
  }

  export type NoteWhereInput = {
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    id?: IntFilter<"Note"> | number
    candidat_id?: IntFilter<"Note"> | number
    matiere_id?: IntFilter<"Note"> | number
    score?: FloatFilter<"Note"> | number
    groupe_id?: IntFilter<"Note"> | number
    candidat?: XOR<CandidatScalarRelationFilter, CandidatWhereInput>
    matiere?: XOR<MatiereScalarRelationFilter, MatiereWhereInput>
  }

  export type NoteOrderByWithRelationInput = {
    id?: SortOrder
    candidat_id?: SortOrder
    matiere_id?: SortOrder
    score?: SortOrder
    groupe_id?: SortOrder
    candidat?: CandidatOrderByWithRelationInput
    matiere?: MatiereOrderByWithRelationInput
  }

  export type NoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    candidat_id?: IntFilter<"Note"> | number
    matiere_id?: IntFilter<"Note"> | number
    score?: FloatFilter<"Note"> | number
    groupe_id?: IntFilter<"Note"> | number
    candidat?: XOR<CandidatScalarRelationFilter, CandidatWhereInput>
    matiere?: XOR<MatiereScalarRelationFilter, MatiereWhereInput>
  }, "id">

  export type NoteOrderByWithAggregationInput = {
    id?: SortOrder
    candidat_id?: SortOrder
    matiere_id?: SortOrder
    score?: SortOrder
    groupe_id?: SortOrder
    _count?: NoteCountOrderByAggregateInput
    _avg?: NoteAvgOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
    _sum?: NoteSumOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    OR?: NoteScalarWhereWithAggregatesInput[]
    NOT?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Note"> | number
    candidat_id?: IntWithAggregatesFilter<"Note"> | number
    matiere_id?: IntWithAggregatesFilter<"Note"> | number
    score?: FloatWithAggregatesFilter<"Note"> | number
    groupe_id?: IntWithAggregatesFilter<"Note"> | number
  }

  export type ResultatWhereInput = {
    AND?: ResultatWhereInput | ResultatWhereInput[]
    OR?: ResultatWhereInput[]
    NOT?: ResultatWhereInput | ResultatWhereInput[]
    id?: IntFilter<"Resultat"> | number
    candidat_id?: IntFilter<"Resultat"> | number
    total?: FloatNullableFilter<"Resultat"> | number | null
    moyenne?: FloatNullableFilter<"Resultat"> | number | null
    rang?: IntNullableFilter<"Resultat"> | number | null
    candidat?: XOR<CandidatScalarRelationFilter, CandidatWhereInput>
  }

  export type ResultatOrderByWithRelationInput = {
    id?: SortOrder
    candidat_id?: SortOrder
    total?: SortOrderInput | SortOrder
    moyenne?: SortOrderInput | SortOrder
    rang?: SortOrderInput | SortOrder
    candidat?: CandidatOrderByWithRelationInput
  }

  export type ResultatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ResultatWhereInput | ResultatWhereInput[]
    OR?: ResultatWhereInput[]
    NOT?: ResultatWhereInput | ResultatWhereInput[]
    candidat_id?: IntFilter<"Resultat"> | number
    total?: FloatNullableFilter<"Resultat"> | number | null
    moyenne?: FloatNullableFilter<"Resultat"> | number | null
    rang?: IntNullableFilter<"Resultat"> | number | null
    candidat?: XOR<CandidatScalarRelationFilter, CandidatWhereInput>
  }, "id">

  export type ResultatOrderByWithAggregationInput = {
    id?: SortOrder
    candidat_id?: SortOrder
    total?: SortOrderInput | SortOrder
    moyenne?: SortOrderInput | SortOrder
    rang?: SortOrderInput | SortOrder
    _count?: ResultatCountOrderByAggregateInput
    _avg?: ResultatAvgOrderByAggregateInput
    _max?: ResultatMaxOrderByAggregateInput
    _min?: ResultatMinOrderByAggregateInput
    _sum?: ResultatSumOrderByAggregateInput
  }

  export type ResultatScalarWhereWithAggregatesInput = {
    AND?: ResultatScalarWhereWithAggregatesInput | ResultatScalarWhereWithAggregatesInput[]
    OR?: ResultatScalarWhereWithAggregatesInput[]
    NOT?: ResultatScalarWhereWithAggregatesInput | ResultatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Resultat"> | number
    candidat_id?: IntWithAggregatesFilter<"Resultat"> | number
    total?: FloatNullableWithAggregatesFilter<"Resultat"> | number | null
    moyenne?: FloatNullableWithAggregatesFilter<"Resultat"> | number | null
    rang?: IntNullableWithAggregatesFilter<"Resultat"> | number | null
  }

  export type MarkWhereInput = {
    AND?: MarkWhereInput | MarkWhereInput[]
    OR?: MarkWhereInput[]
    NOT?: MarkWhereInput | MarkWhereInput[]
    id?: IntFilter<"Mark"> | number
    candidatId?: IntFilter<"Mark"> | number
    numcorrection?: StringFilter<"Mark"> | string
    red?: FloatFilter<"Mark"> | number
    dic?: FloatFilter<"Mark"> | number
    tsq?: FloatFilter<"Mark"> | number
    svt?: FloatFilter<"Mark"> | number
    lv1?: FloatFilter<"Mark"> | number
    mat?: FloatFilter<"Mark"> | number
    hg?: FloatFilter<"Mark"> | number
    ec?: FloatFilter<"Mark"> | number
    sp?: FloatFilter<"Mark"> | number
    part?: FloatFilter<"Mark"> | number
    orale?: FloatFilter<"Mark"> | number
    candidat?: XOR<CandidatScalarRelationFilter, CandidatWhereInput>
  }

  export type MarkOrderByWithRelationInput = {
    id?: SortOrder
    candidatId?: SortOrder
    numcorrection?: SortOrder
    red?: SortOrder
    dic?: SortOrder
    tsq?: SortOrder
    svt?: SortOrder
    lv1?: SortOrder
    mat?: SortOrder
    hg?: SortOrder
    ec?: SortOrder
    sp?: SortOrder
    part?: SortOrder
    orale?: SortOrder
    candidat?: CandidatOrderByWithRelationInput
  }

  export type MarkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    candidatId?: number
    numcorrection?: string
    AND?: MarkWhereInput | MarkWhereInput[]
    OR?: MarkWhereInput[]
    NOT?: MarkWhereInput | MarkWhereInput[]
    red?: FloatFilter<"Mark"> | number
    dic?: FloatFilter<"Mark"> | number
    tsq?: FloatFilter<"Mark"> | number
    svt?: FloatFilter<"Mark"> | number
    lv1?: FloatFilter<"Mark"> | number
    mat?: FloatFilter<"Mark"> | number
    hg?: FloatFilter<"Mark"> | number
    ec?: FloatFilter<"Mark"> | number
    sp?: FloatFilter<"Mark"> | number
    part?: FloatFilter<"Mark"> | number
    orale?: FloatFilter<"Mark"> | number
    candidat?: XOR<CandidatScalarRelationFilter, CandidatWhereInput>
  }, "id" | "candidatId" | "numcorrection">

  export type MarkOrderByWithAggregationInput = {
    id?: SortOrder
    candidatId?: SortOrder
    numcorrection?: SortOrder
    red?: SortOrder
    dic?: SortOrder
    tsq?: SortOrder
    svt?: SortOrder
    lv1?: SortOrder
    mat?: SortOrder
    hg?: SortOrder
    ec?: SortOrder
    sp?: SortOrder
    part?: SortOrder
    orale?: SortOrder
    _count?: MarkCountOrderByAggregateInput
    _avg?: MarkAvgOrderByAggregateInput
    _max?: MarkMaxOrderByAggregateInput
    _min?: MarkMinOrderByAggregateInput
    _sum?: MarkSumOrderByAggregateInput
  }

  export type MarkScalarWhereWithAggregatesInput = {
    AND?: MarkScalarWhereWithAggregatesInput | MarkScalarWhereWithAggregatesInput[]
    OR?: MarkScalarWhereWithAggregatesInput[]
    NOT?: MarkScalarWhereWithAggregatesInput | MarkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mark"> | number
    candidatId?: IntWithAggregatesFilter<"Mark"> | number
    numcorrection?: StringWithAggregatesFilter<"Mark"> | string
    red?: FloatWithAggregatesFilter<"Mark"> | number
    dic?: FloatWithAggregatesFilter<"Mark"> | number
    tsq?: FloatWithAggregatesFilter<"Mark"> | number
    svt?: FloatWithAggregatesFilter<"Mark"> | number
    lv1?: FloatWithAggregatesFilter<"Mark"> | number
    mat?: FloatWithAggregatesFilter<"Mark"> | number
    hg?: FloatWithAggregatesFilter<"Mark"> | number
    ec?: FloatWithAggregatesFilter<"Mark"> | number
    sp?: FloatWithAggregatesFilter<"Mark"> | number
    part?: FloatWithAggregatesFilter<"Mark"> | number
    orale?: FloatWithAggregatesFilter<"Mark"> | number
  }

  export type ContactCreateInput = {
    prenom: string
    nom: string
    email: string
    description?: string | null
    phone?: string | null
    adresse?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type ContactUncheckedCreateInput = {
    id?: number
    prenom: string
    nom: string
    email: string
    description?: string | null
    phone?: string | null
    adresse?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type ContactUpdateInput = {
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateManyInput = {
    id?: number
    prenom: string
    nom: string
    email: string
    description?: string | null
    phone?: string | null
    adresse?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    title: string
    slug: string
    content?: string | null
    published?: boolean
    authorId: string
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    slug: string
    content?: string | null
    published?: boolean
    authorId: string
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    slug: string
    content?: string | null
    published?: boolean
    authorId: string
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type CandidatCreateInput = {
    prenoms: string
    nom: string
    date_naissance: Date | string
    lieu_naissance: string
    sexe?: string
    aptitude?: string
    section?: string
    option?: string
    etat?: boolean
    etablissement: EtablissementCreateNestedOneWithoutCandidatsInput
    notes?: NoteCreateNestedManyWithoutCandidatInput
    resultats?: ResultatCreateNestedManyWithoutCandidatInput
    Anonymat?: AnonymatCreateNestedOneWithoutCandidatInput
    mark?: MarkCreateNestedOneWithoutCandidatInput
  }

  export type CandidatUncheckedCreateInput = {
    id?: number
    prenoms: string
    nom: string
    date_naissance: Date | string
    lieu_naissance: string
    sexe?: string
    aptitude?: string
    section?: string
    option?: string
    etat?: boolean
    etablissement_id: number
    notes?: NoteUncheckedCreateNestedManyWithoutCandidatInput
    resultats?: ResultatUncheckedCreateNestedManyWithoutCandidatInput
    Anonymat?: AnonymatUncheckedCreateNestedOneWithoutCandidatInput
    mark?: MarkUncheckedCreateNestedOneWithoutCandidatInput
  }

  export type CandidatUpdateInput = {
    prenoms?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieu_naissance?: StringFieldUpdateOperationsInput | string
    sexe?: StringFieldUpdateOperationsInput | string
    aptitude?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    etat?: BoolFieldUpdateOperationsInput | boolean
    etablissement?: EtablissementUpdateOneRequiredWithoutCandidatsNestedInput
    notes?: NoteUpdateManyWithoutCandidatNestedInput
    resultats?: ResultatUpdateManyWithoutCandidatNestedInput
    Anonymat?: AnonymatUpdateOneWithoutCandidatNestedInput
    mark?: MarkUpdateOneWithoutCandidatNestedInput
  }

  export type CandidatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenoms?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieu_naissance?: StringFieldUpdateOperationsInput | string
    sexe?: StringFieldUpdateOperationsInput | string
    aptitude?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    etat?: BoolFieldUpdateOperationsInput | boolean
    etablissement_id?: IntFieldUpdateOperationsInput | number
    notes?: NoteUncheckedUpdateManyWithoutCandidatNestedInput
    resultats?: ResultatUncheckedUpdateManyWithoutCandidatNestedInput
    Anonymat?: AnonymatUncheckedUpdateOneWithoutCandidatNestedInput
    mark?: MarkUncheckedUpdateOneWithoutCandidatNestedInput
  }

  export type CandidatCreateManyInput = {
    id?: number
    prenoms: string
    nom: string
    date_naissance: Date | string
    lieu_naissance: string
    sexe?: string
    aptitude?: string
    section?: string
    option?: string
    etat?: boolean
    etablissement_id: number
  }

  export type CandidatUpdateManyMutationInput = {
    prenoms?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieu_naissance?: StringFieldUpdateOperationsInput | string
    sexe?: StringFieldUpdateOperationsInput | string
    aptitude?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    etat?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CandidatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenoms?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieu_naissance?: StringFieldUpdateOperationsInput | string
    sexe?: StringFieldUpdateOperationsInput | string
    aptitude?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    etat?: BoolFieldUpdateOperationsInput | boolean
    etablissement_id?: IntFieldUpdateOperationsInput | number
  }

  export type AnonymatCreateInput = {
    code: string
    candidat: CandidatCreateNestedOneWithoutAnonymatInput
  }

  export type AnonymatUncheckedCreateInput = {
    id?: number
    code: string
    candidatId: number
  }

  export type AnonymatUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    candidat?: CandidatUpdateOneRequiredWithoutAnonymatNestedInput
  }

  export type AnonymatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    candidatId?: IntFieldUpdateOperationsInput | number
  }

  export type AnonymatCreateManyInput = {
    id?: number
    code: string
    candidatId: number
  }

  export type AnonymatUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
  }

  export type AnonymatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    candidatId?: IntFieldUpdateOperationsInput | number
  }

  export type ZoneCreateInput = {
    name: string
    slug: string
    responsable: string
    contact: string
    centres?: CentreCreateNestedManyWithoutZoneInput
    etablissements?: EtablissementCreateNestedManyWithoutZoneInput
  }

  export type ZoneUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    responsable: string
    contact: string
    centres?: CentreUncheckedCreateNestedManyWithoutZoneInput
    etablissements?: EtablissementUncheckedCreateNestedManyWithoutZoneInput
  }

  export type ZoneUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    centres?: CentreUpdateManyWithoutZoneNestedInput
    etablissements?: EtablissementUpdateManyWithoutZoneNestedInput
  }

  export type ZoneUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    centres?: CentreUncheckedUpdateManyWithoutZoneNestedInput
    etablissements?: EtablissementUncheckedUpdateManyWithoutZoneNestedInput
  }

  export type ZoneCreateManyInput = {
    id?: number
    name: string
    slug: string
    responsable: string
    contact: string
  }

  export type ZoneUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
  }

  export type ZoneUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
  }

  export type CentreCreateInput = {
    name?: string | null
    slug?: string | null
    contact?: string | null
    zone: ZoneCreateNestedOneWithoutCentresInput
    jurys?: JuryCreateNestedManyWithoutCentreInput
  }

  export type CentreUncheckedCreateInput = {
    id?: number
    name?: string | null
    slug?: string | null
    contact?: string | null
    zoneId: number
    jurys?: JuryUncheckedCreateNestedManyWithoutCentreInput
  }

  export type CentreUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: ZoneUpdateOneRequiredWithoutCentresNestedInput
    jurys?: JuryUpdateManyWithoutCentreNestedInput
  }

  export type CentreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    zoneId?: IntFieldUpdateOperationsInput | number
    jurys?: JuryUncheckedUpdateManyWithoutCentreNestedInput
  }

  export type CentreCreateManyInput = {
    id?: number
    name?: string | null
    slug?: string | null
    contact?: string | null
    zoneId: number
  }

  export type CentreUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CentreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    zoneId?: IntFieldUpdateOperationsInput | number
  }

  export type EtablissementCreateInput = {
    name: string
    slug: string
    zone: ZoneCreateNestedOneWithoutEtablissementsInput
    candidats?: CandidatCreateNestedManyWithoutEtablissementInput
  }

  export type EtablissementUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    zoneId: number
    candidats?: CandidatUncheckedCreateNestedManyWithoutEtablissementInput
  }

  export type EtablissementUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    zone?: ZoneUpdateOneRequiredWithoutEtablissementsNestedInput
    candidats?: CandidatUpdateManyWithoutEtablissementNestedInput
  }

  export type EtablissementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    zoneId?: IntFieldUpdateOperationsInput | number
    candidats?: CandidatUncheckedUpdateManyWithoutEtablissementNestedInput
  }

  export type EtablissementCreateManyInput = {
    id?: number
    name: string
    slug: string
    zoneId: number
  }

  export type EtablissementUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type EtablissementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    zoneId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupeCreateInput = {
    name: string
    slug: string
    total?: number
  }

  export type GroupeUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    total?: number
  }

  export type GroupeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type GroupeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type GroupeCreateManyInput = {
    id?: number
    name: string
    slug: string
    total?: number
  }

  export type GroupeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type GroupeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type JuryCreateInput = {
    numero: number
    president?: string | null
    centre?: CentreCreateNestedOneWithoutJurysInput
  }

  export type JuryUncheckedCreateInput = {
    id?: number
    numero: number
    centre_id?: number | null
    president?: string | null
  }

  export type JuryUpdateInput = {
    numero?: IntFieldUpdateOperationsInput | number
    president?: NullableStringFieldUpdateOperationsInput | string | null
    centre?: CentreUpdateOneWithoutJurysNestedInput
  }

  export type JuryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    centre_id?: NullableIntFieldUpdateOperationsInput | number | null
    president?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JuryCreateManyInput = {
    id?: number
    numero: number
    centre_id?: number | null
    president?: string | null
  }

  export type JuryUpdateManyMutationInput = {
    numero?: IntFieldUpdateOperationsInput | number
    president?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JuryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    centre_id?: NullableIntFieldUpdateOperationsInput | number | null
    president?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatiereCreateInput = {
    name?: string | null
    slug?: number | null
    coefficient: number
    notes?: NoteCreateNestedManyWithoutMatiereInput
  }

  export type MatiereUncheckedCreateInput = {
    id?: number
    name?: string | null
    slug?: number | null
    coefficient: number
    notes?: NoteUncheckedCreateNestedManyWithoutMatiereInput
  }

  export type MatiereUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableIntFieldUpdateOperationsInput | number | null
    coefficient?: IntFieldUpdateOperationsInput | number
    notes?: NoteUpdateManyWithoutMatiereNestedInput
  }

  export type MatiereUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableIntFieldUpdateOperationsInput | number | null
    coefficient?: IntFieldUpdateOperationsInput | number
    notes?: NoteUncheckedUpdateManyWithoutMatiereNestedInput
  }

  export type MatiereCreateManyInput = {
    id?: number
    name?: string | null
    slug?: number | null
    coefficient: number
  }

  export type MatiereUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableIntFieldUpdateOperationsInput | number | null
    coefficient?: IntFieldUpdateOperationsInput | number
  }

  export type MatiereUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableIntFieldUpdateOperationsInput | number | null
    coefficient?: IntFieldUpdateOperationsInput | number
  }

  export type NoteCreateInput = {
    score?: number
    groupe_id: number
    candidat: CandidatCreateNestedOneWithoutNotesInput
    matiere: MatiereCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateInput = {
    id?: number
    candidat_id: number
    matiere_id: number
    score?: number
    groupe_id: number
  }

  export type NoteUpdateInput = {
    score?: FloatFieldUpdateOperationsInput | number
    groupe_id?: IntFieldUpdateOperationsInput | number
    candidat?: CandidatUpdateOneRequiredWithoutNotesNestedInput
    matiere?: MatiereUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidat_id?: IntFieldUpdateOperationsInput | number
    matiere_id?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    groupe_id?: IntFieldUpdateOperationsInput | number
  }

  export type NoteCreateManyInput = {
    id?: number
    candidat_id: number
    matiere_id: number
    score?: number
    groupe_id: number
  }

  export type NoteUpdateManyMutationInput = {
    score?: FloatFieldUpdateOperationsInput | number
    groupe_id?: IntFieldUpdateOperationsInput | number
  }

  export type NoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidat_id?: IntFieldUpdateOperationsInput | number
    matiere_id?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    groupe_id?: IntFieldUpdateOperationsInput | number
  }

  export type ResultatCreateInput = {
    total?: number | null
    moyenne?: number | null
    rang?: number | null
    candidat: CandidatCreateNestedOneWithoutResultatsInput
  }

  export type ResultatUncheckedCreateInput = {
    id?: number
    candidat_id: number
    total?: number | null
    moyenne?: number | null
    rang?: number | null
  }

  export type ResultatUpdateInput = {
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    moyenne?: NullableFloatFieldUpdateOperationsInput | number | null
    rang?: NullableIntFieldUpdateOperationsInput | number | null
    candidat?: CandidatUpdateOneRequiredWithoutResultatsNestedInput
  }

  export type ResultatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidat_id?: IntFieldUpdateOperationsInput | number
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    moyenne?: NullableFloatFieldUpdateOperationsInput | number | null
    rang?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ResultatCreateManyInput = {
    id?: number
    candidat_id: number
    total?: number | null
    moyenne?: number | null
    rang?: number | null
  }

  export type ResultatUpdateManyMutationInput = {
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    moyenne?: NullableFloatFieldUpdateOperationsInput | number | null
    rang?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ResultatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidat_id?: IntFieldUpdateOperationsInput | number
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    moyenne?: NullableFloatFieldUpdateOperationsInput | number | null
    rang?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MarkCreateInput = {
    numcorrection: string
    red?: number
    dic?: number
    tsq?: number
    svt?: number
    lv1?: number
    mat?: number
    hg?: number
    ec?: number
    sp?: number
    part?: number
    orale?: number
    candidat: CandidatCreateNestedOneWithoutMarkInput
  }

  export type MarkUncheckedCreateInput = {
    id?: number
    candidatId: number
    numcorrection: string
    red?: number
    dic?: number
    tsq?: number
    svt?: number
    lv1?: number
    mat?: number
    hg?: number
    ec?: number
    sp?: number
    part?: number
    orale?: number
  }

  export type MarkUpdateInput = {
    numcorrection?: StringFieldUpdateOperationsInput | string
    red?: FloatFieldUpdateOperationsInput | number
    dic?: FloatFieldUpdateOperationsInput | number
    tsq?: FloatFieldUpdateOperationsInput | number
    svt?: FloatFieldUpdateOperationsInput | number
    lv1?: FloatFieldUpdateOperationsInput | number
    mat?: FloatFieldUpdateOperationsInput | number
    hg?: FloatFieldUpdateOperationsInput | number
    ec?: FloatFieldUpdateOperationsInput | number
    sp?: FloatFieldUpdateOperationsInput | number
    part?: FloatFieldUpdateOperationsInput | number
    orale?: FloatFieldUpdateOperationsInput | number
    candidat?: CandidatUpdateOneRequiredWithoutMarkNestedInput
  }

  export type MarkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidatId?: IntFieldUpdateOperationsInput | number
    numcorrection?: StringFieldUpdateOperationsInput | string
    red?: FloatFieldUpdateOperationsInput | number
    dic?: FloatFieldUpdateOperationsInput | number
    tsq?: FloatFieldUpdateOperationsInput | number
    svt?: FloatFieldUpdateOperationsInput | number
    lv1?: FloatFieldUpdateOperationsInput | number
    mat?: FloatFieldUpdateOperationsInput | number
    hg?: FloatFieldUpdateOperationsInput | number
    ec?: FloatFieldUpdateOperationsInput | number
    sp?: FloatFieldUpdateOperationsInput | number
    part?: FloatFieldUpdateOperationsInput | number
    orale?: FloatFieldUpdateOperationsInput | number
  }

  export type MarkCreateManyInput = {
    id?: number
    candidatId: number
    numcorrection: string
    red?: number
    dic?: number
    tsq?: number
    svt?: number
    lv1?: number
    mat?: number
    hg?: number
    ec?: number
    sp?: number
    part?: number
    orale?: number
  }

  export type MarkUpdateManyMutationInput = {
    numcorrection?: StringFieldUpdateOperationsInput | string
    red?: FloatFieldUpdateOperationsInput | number
    dic?: FloatFieldUpdateOperationsInput | number
    tsq?: FloatFieldUpdateOperationsInput | number
    svt?: FloatFieldUpdateOperationsInput | number
    lv1?: FloatFieldUpdateOperationsInput | number
    mat?: FloatFieldUpdateOperationsInput | number
    hg?: FloatFieldUpdateOperationsInput | number
    ec?: FloatFieldUpdateOperationsInput | number
    sp?: FloatFieldUpdateOperationsInput | number
    part?: FloatFieldUpdateOperationsInput | number
    orale?: FloatFieldUpdateOperationsInput | number
  }

  export type MarkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidatId?: IntFieldUpdateOperationsInput | number
    numcorrection?: StringFieldUpdateOperationsInput | string
    red?: FloatFieldUpdateOperationsInput | number
    dic?: FloatFieldUpdateOperationsInput | number
    tsq?: FloatFieldUpdateOperationsInput | number
    svt?: FloatFieldUpdateOperationsInput | number
    lv1?: FloatFieldUpdateOperationsInput | number
    mat?: FloatFieldUpdateOperationsInput | number
    hg?: FloatFieldUpdateOperationsInput | number
    ec?: FloatFieldUpdateOperationsInput | number
    sp?: FloatFieldUpdateOperationsInput | number
    part?: FloatFieldUpdateOperationsInput | number
    orale?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    description?: SortOrder
    phone?: SortOrder
    adresse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    description?: SortOrder
    phone?: SortOrder
    adresse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    description?: SortOrder
    phone?: SortOrder
    adresse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EtablissementScalarRelationFilter = {
    is?: EtablissementWhereInput
    isNot?: EtablissementWhereInput
  }

  export type NoteListRelationFilter = {
    every?: NoteWhereInput
    some?: NoteWhereInput
    none?: NoteWhereInput
  }

  export type ResultatListRelationFilter = {
    every?: ResultatWhereInput
    some?: ResultatWhereInput
    none?: ResultatWhereInput
  }

  export type AnonymatNullableScalarRelationFilter = {
    is?: AnonymatWhereInput | null
    isNot?: AnonymatWhereInput | null
  }

  export type MarkNullableScalarRelationFilter = {
    is?: MarkWhereInput | null
    isNot?: MarkWhereInput | null
  }

  export type NoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResultatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CandidatCountOrderByAggregateInput = {
    id?: SortOrder
    prenoms?: SortOrder
    nom?: SortOrder
    date_naissance?: SortOrder
    lieu_naissance?: SortOrder
    sexe?: SortOrder
    aptitude?: SortOrder
    section?: SortOrder
    option?: SortOrder
    etat?: SortOrder
    etablissement_id?: SortOrder
  }

  export type CandidatAvgOrderByAggregateInput = {
    id?: SortOrder
    etablissement_id?: SortOrder
  }

  export type CandidatMaxOrderByAggregateInput = {
    id?: SortOrder
    prenoms?: SortOrder
    nom?: SortOrder
    date_naissance?: SortOrder
    lieu_naissance?: SortOrder
    sexe?: SortOrder
    aptitude?: SortOrder
    section?: SortOrder
    option?: SortOrder
    etat?: SortOrder
    etablissement_id?: SortOrder
  }

  export type CandidatMinOrderByAggregateInput = {
    id?: SortOrder
    prenoms?: SortOrder
    nom?: SortOrder
    date_naissance?: SortOrder
    lieu_naissance?: SortOrder
    sexe?: SortOrder
    aptitude?: SortOrder
    section?: SortOrder
    option?: SortOrder
    etat?: SortOrder
    etablissement_id?: SortOrder
  }

  export type CandidatSumOrderByAggregateInput = {
    id?: SortOrder
    etablissement_id?: SortOrder
  }

  export type CandidatScalarRelationFilter = {
    is?: CandidatWhereInput
    isNot?: CandidatWhereInput
  }

  export type AnonymatCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    candidatId?: SortOrder
  }

  export type AnonymatAvgOrderByAggregateInput = {
    id?: SortOrder
    candidatId?: SortOrder
  }

  export type AnonymatMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    candidatId?: SortOrder
  }

  export type AnonymatMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    candidatId?: SortOrder
  }

  export type AnonymatSumOrderByAggregateInput = {
    id?: SortOrder
    candidatId?: SortOrder
  }

  export type CentreListRelationFilter = {
    every?: CentreWhereInput
    some?: CentreWhereInput
    none?: CentreWhereInput
  }

  export type EtablissementListRelationFilter = {
    every?: EtablissementWhereInput
    some?: EtablissementWhereInput
    none?: EtablissementWhereInput
  }

  export type CentreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EtablissementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ZoneCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    responsable?: SortOrder
    contact?: SortOrder
  }

  export type ZoneAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ZoneMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    responsable?: SortOrder
    contact?: SortOrder
  }

  export type ZoneMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    responsable?: SortOrder
    contact?: SortOrder
  }

  export type ZoneSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ZoneScalarRelationFilter = {
    is?: ZoneWhereInput
    isNot?: ZoneWhereInput
  }

  export type JuryListRelationFilter = {
    every?: JuryWhereInput
    some?: JuryWhereInput
    none?: JuryWhereInput
  }

  export type JuryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CentreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    contact?: SortOrder
    zoneId?: SortOrder
  }

  export type CentreAvgOrderByAggregateInput = {
    id?: SortOrder
    zoneId?: SortOrder
  }

  export type CentreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    contact?: SortOrder
    zoneId?: SortOrder
  }

  export type CentreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    contact?: SortOrder
    zoneId?: SortOrder
  }

  export type CentreSumOrderByAggregateInput = {
    id?: SortOrder
    zoneId?: SortOrder
  }

  export type CandidatListRelationFilter = {
    every?: CandidatWhereInput
    some?: CandidatWhereInput
    none?: CandidatWhereInput
  }

  export type CandidatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EtablissementCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    zoneId?: SortOrder
  }

  export type EtablissementAvgOrderByAggregateInput = {
    id?: SortOrder
    zoneId?: SortOrder
  }

  export type EtablissementMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    zoneId?: SortOrder
  }

  export type EtablissementMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    zoneId?: SortOrder
  }

  export type EtablissementSumOrderByAggregateInput = {
    id?: SortOrder
    zoneId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type GroupeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    total?: SortOrder
  }

  export type GroupeAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
  }

  export type GroupeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    total?: SortOrder
  }

  export type GroupeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    total?: SortOrder
  }

  export type GroupeSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CentreNullableScalarRelationFilter = {
    is?: CentreWhereInput | null
    isNot?: CentreWhereInput | null
  }

  export type JuryCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    centre_id?: SortOrder
    president?: SortOrder
  }

  export type JuryAvgOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    centre_id?: SortOrder
  }

  export type JuryMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    centre_id?: SortOrder
    president?: SortOrder
  }

  export type JuryMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    centre_id?: SortOrder
    president?: SortOrder
  }

  export type JurySumOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    centre_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type MatiereCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    coefficient?: SortOrder
  }

  export type MatiereAvgOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    coefficient?: SortOrder
  }

  export type MatiereMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    coefficient?: SortOrder
  }

  export type MatiereMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    coefficient?: SortOrder
  }

  export type MatiereSumOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    coefficient?: SortOrder
  }

  export type MatiereScalarRelationFilter = {
    is?: MatiereWhereInput
    isNot?: MatiereWhereInput
  }

  export type NoteCountOrderByAggregateInput = {
    id?: SortOrder
    candidat_id?: SortOrder
    matiere_id?: SortOrder
    score?: SortOrder
    groupe_id?: SortOrder
  }

  export type NoteAvgOrderByAggregateInput = {
    id?: SortOrder
    candidat_id?: SortOrder
    matiere_id?: SortOrder
    score?: SortOrder
    groupe_id?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    id?: SortOrder
    candidat_id?: SortOrder
    matiere_id?: SortOrder
    score?: SortOrder
    groupe_id?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    id?: SortOrder
    candidat_id?: SortOrder
    matiere_id?: SortOrder
    score?: SortOrder
    groupe_id?: SortOrder
  }

  export type NoteSumOrderByAggregateInput = {
    id?: SortOrder
    candidat_id?: SortOrder
    matiere_id?: SortOrder
    score?: SortOrder
    groupe_id?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ResultatCountOrderByAggregateInput = {
    id?: SortOrder
    candidat_id?: SortOrder
    total?: SortOrder
    moyenne?: SortOrder
    rang?: SortOrder
  }

  export type ResultatAvgOrderByAggregateInput = {
    id?: SortOrder
    candidat_id?: SortOrder
    total?: SortOrder
    moyenne?: SortOrder
    rang?: SortOrder
  }

  export type ResultatMaxOrderByAggregateInput = {
    id?: SortOrder
    candidat_id?: SortOrder
    total?: SortOrder
    moyenne?: SortOrder
    rang?: SortOrder
  }

  export type ResultatMinOrderByAggregateInput = {
    id?: SortOrder
    candidat_id?: SortOrder
    total?: SortOrder
    moyenne?: SortOrder
    rang?: SortOrder
  }

  export type ResultatSumOrderByAggregateInput = {
    id?: SortOrder
    candidat_id?: SortOrder
    total?: SortOrder
    moyenne?: SortOrder
    rang?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type MarkCountOrderByAggregateInput = {
    id?: SortOrder
    candidatId?: SortOrder
    numcorrection?: SortOrder
    red?: SortOrder
    dic?: SortOrder
    tsq?: SortOrder
    svt?: SortOrder
    lv1?: SortOrder
    mat?: SortOrder
    hg?: SortOrder
    ec?: SortOrder
    sp?: SortOrder
    part?: SortOrder
    orale?: SortOrder
  }

  export type MarkAvgOrderByAggregateInput = {
    id?: SortOrder
    candidatId?: SortOrder
    red?: SortOrder
    dic?: SortOrder
    tsq?: SortOrder
    svt?: SortOrder
    lv1?: SortOrder
    mat?: SortOrder
    hg?: SortOrder
    ec?: SortOrder
    sp?: SortOrder
    part?: SortOrder
    orale?: SortOrder
  }

  export type MarkMaxOrderByAggregateInput = {
    id?: SortOrder
    candidatId?: SortOrder
    numcorrection?: SortOrder
    red?: SortOrder
    dic?: SortOrder
    tsq?: SortOrder
    svt?: SortOrder
    lv1?: SortOrder
    mat?: SortOrder
    hg?: SortOrder
    ec?: SortOrder
    sp?: SortOrder
    part?: SortOrder
    orale?: SortOrder
  }

  export type MarkMinOrderByAggregateInput = {
    id?: SortOrder
    candidatId?: SortOrder
    numcorrection?: SortOrder
    red?: SortOrder
    dic?: SortOrder
    tsq?: SortOrder
    svt?: SortOrder
    lv1?: SortOrder
    mat?: SortOrder
    hg?: SortOrder
    ec?: SortOrder
    sp?: SortOrder
    part?: SortOrder
    orale?: SortOrder
  }

  export type MarkSumOrderByAggregateInput = {
    id?: SortOrder
    candidatId?: SortOrder
    red?: SortOrder
    dic?: SortOrder
    tsq?: SortOrder
    svt?: SortOrder
    lv1?: SortOrder
    mat?: SortOrder
    hg?: SortOrder
    ec?: SortOrder
    sp?: SortOrder
    part?: SortOrder
    orale?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EtablissementCreateNestedOneWithoutCandidatsInput = {
    create?: XOR<EtablissementCreateWithoutCandidatsInput, EtablissementUncheckedCreateWithoutCandidatsInput>
    connectOrCreate?: EtablissementCreateOrConnectWithoutCandidatsInput
    connect?: EtablissementWhereUniqueInput
  }

  export type NoteCreateNestedManyWithoutCandidatInput = {
    create?: XOR<NoteCreateWithoutCandidatInput, NoteUncheckedCreateWithoutCandidatInput> | NoteCreateWithoutCandidatInput[] | NoteUncheckedCreateWithoutCandidatInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutCandidatInput | NoteCreateOrConnectWithoutCandidatInput[]
    createMany?: NoteCreateManyCandidatInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type ResultatCreateNestedManyWithoutCandidatInput = {
    create?: XOR<ResultatCreateWithoutCandidatInput, ResultatUncheckedCreateWithoutCandidatInput> | ResultatCreateWithoutCandidatInput[] | ResultatUncheckedCreateWithoutCandidatInput[]
    connectOrCreate?: ResultatCreateOrConnectWithoutCandidatInput | ResultatCreateOrConnectWithoutCandidatInput[]
    createMany?: ResultatCreateManyCandidatInputEnvelope
    connect?: ResultatWhereUniqueInput | ResultatWhereUniqueInput[]
  }

  export type AnonymatCreateNestedOneWithoutCandidatInput = {
    create?: XOR<AnonymatCreateWithoutCandidatInput, AnonymatUncheckedCreateWithoutCandidatInput>
    connectOrCreate?: AnonymatCreateOrConnectWithoutCandidatInput
    connect?: AnonymatWhereUniqueInput
  }

  export type MarkCreateNestedOneWithoutCandidatInput = {
    create?: XOR<MarkCreateWithoutCandidatInput, MarkUncheckedCreateWithoutCandidatInput>
    connectOrCreate?: MarkCreateOrConnectWithoutCandidatInput
    connect?: MarkWhereUniqueInput
  }

  export type NoteUncheckedCreateNestedManyWithoutCandidatInput = {
    create?: XOR<NoteCreateWithoutCandidatInput, NoteUncheckedCreateWithoutCandidatInput> | NoteCreateWithoutCandidatInput[] | NoteUncheckedCreateWithoutCandidatInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutCandidatInput | NoteCreateOrConnectWithoutCandidatInput[]
    createMany?: NoteCreateManyCandidatInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type ResultatUncheckedCreateNestedManyWithoutCandidatInput = {
    create?: XOR<ResultatCreateWithoutCandidatInput, ResultatUncheckedCreateWithoutCandidatInput> | ResultatCreateWithoutCandidatInput[] | ResultatUncheckedCreateWithoutCandidatInput[]
    connectOrCreate?: ResultatCreateOrConnectWithoutCandidatInput | ResultatCreateOrConnectWithoutCandidatInput[]
    createMany?: ResultatCreateManyCandidatInputEnvelope
    connect?: ResultatWhereUniqueInput | ResultatWhereUniqueInput[]
  }

  export type AnonymatUncheckedCreateNestedOneWithoutCandidatInput = {
    create?: XOR<AnonymatCreateWithoutCandidatInput, AnonymatUncheckedCreateWithoutCandidatInput>
    connectOrCreate?: AnonymatCreateOrConnectWithoutCandidatInput
    connect?: AnonymatWhereUniqueInput
  }

  export type MarkUncheckedCreateNestedOneWithoutCandidatInput = {
    create?: XOR<MarkCreateWithoutCandidatInput, MarkUncheckedCreateWithoutCandidatInput>
    connectOrCreate?: MarkCreateOrConnectWithoutCandidatInput
    connect?: MarkWhereUniqueInput
  }

  export type EtablissementUpdateOneRequiredWithoutCandidatsNestedInput = {
    create?: XOR<EtablissementCreateWithoutCandidatsInput, EtablissementUncheckedCreateWithoutCandidatsInput>
    connectOrCreate?: EtablissementCreateOrConnectWithoutCandidatsInput
    upsert?: EtablissementUpsertWithoutCandidatsInput
    connect?: EtablissementWhereUniqueInput
    update?: XOR<XOR<EtablissementUpdateToOneWithWhereWithoutCandidatsInput, EtablissementUpdateWithoutCandidatsInput>, EtablissementUncheckedUpdateWithoutCandidatsInput>
  }

  export type NoteUpdateManyWithoutCandidatNestedInput = {
    create?: XOR<NoteCreateWithoutCandidatInput, NoteUncheckedCreateWithoutCandidatInput> | NoteCreateWithoutCandidatInput[] | NoteUncheckedCreateWithoutCandidatInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutCandidatInput | NoteCreateOrConnectWithoutCandidatInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutCandidatInput | NoteUpsertWithWhereUniqueWithoutCandidatInput[]
    createMany?: NoteCreateManyCandidatInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutCandidatInput | NoteUpdateWithWhereUniqueWithoutCandidatInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutCandidatInput | NoteUpdateManyWithWhereWithoutCandidatInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type ResultatUpdateManyWithoutCandidatNestedInput = {
    create?: XOR<ResultatCreateWithoutCandidatInput, ResultatUncheckedCreateWithoutCandidatInput> | ResultatCreateWithoutCandidatInput[] | ResultatUncheckedCreateWithoutCandidatInput[]
    connectOrCreate?: ResultatCreateOrConnectWithoutCandidatInput | ResultatCreateOrConnectWithoutCandidatInput[]
    upsert?: ResultatUpsertWithWhereUniqueWithoutCandidatInput | ResultatUpsertWithWhereUniqueWithoutCandidatInput[]
    createMany?: ResultatCreateManyCandidatInputEnvelope
    set?: ResultatWhereUniqueInput | ResultatWhereUniqueInput[]
    disconnect?: ResultatWhereUniqueInput | ResultatWhereUniqueInput[]
    delete?: ResultatWhereUniqueInput | ResultatWhereUniqueInput[]
    connect?: ResultatWhereUniqueInput | ResultatWhereUniqueInput[]
    update?: ResultatUpdateWithWhereUniqueWithoutCandidatInput | ResultatUpdateWithWhereUniqueWithoutCandidatInput[]
    updateMany?: ResultatUpdateManyWithWhereWithoutCandidatInput | ResultatUpdateManyWithWhereWithoutCandidatInput[]
    deleteMany?: ResultatScalarWhereInput | ResultatScalarWhereInput[]
  }

  export type AnonymatUpdateOneWithoutCandidatNestedInput = {
    create?: XOR<AnonymatCreateWithoutCandidatInput, AnonymatUncheckedCreateWithoutCandidatInput>
    connectOrCreate?: AnonymatCreateOrConnectWithoutCandidatInput
    upsert?: AnonymatUpsertWithoutCandidatInput
    disconnect?: AnonymatWhereInput | boolean
    delete?: AnonymatWhereInput | boolean
    connect?: AnonymatWhereUniqueInput
    update?: XOR<XOR<AnonymatUpdateToOneWithWhereWithoutCandidatInput, AnonymatUpdateWithoutCandidatInput>, AnonymatUncheckedUpdateWithoutCandidatInput>
  }

  export type MarkUpdateOneWithoutCandidatNestedInput = {
    create?: XOR<MarkCreateWithoutCandidatInput, MarkUncheckedCreateWithoutCandidatInput>
    connectOrCreate?: MarkCreateOrConnectWithoutCandidatInput
    upsert?: MarkUpsertWithoutCandidatInput
    disconnect?: MarkWhereInput | boolean
    delete?: MarkWhereInput | boolean
    connect?: MarkWhereUniqueInput
    update?: XOR<XOR<MarkUpdateToOneWithWhereWithoutCandidatInput, MarkUpdateWithoutCandidatInput>, MarkUncheckedUpdateWithoutCandidatInput>
  }

  export type NoteUncheckedUpdateManyWithoutCandidatNestedInput = {
    create?: XOR<NoteCreateWithoutCandidatInput, NoteUncheckedCreateWithoutCandidatInput> | NoteCreateWithoutCandidatInput[] | NoteUncheckedCreateWithoutCandidatInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutCandidatInput | NoteCreateOrConnectWithoutCandidatInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutCandidatInput | NoteUpsertWithWhereUniqueWithoutCandidatInput[]
    createMany?: NoteCreateManyCandidatInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutCandidatInput | NoteUpdateWithWhereUniqueWithoutCandidatInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutCandidatInput | NoteUpdateManyWithWhereWithoutCandidatInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type ResultatUncheckedUpdateManyWithoutCandidatNestedInput = {
    create?: XOR<ResultatCreateWithoutCandidatInput, ResultatUncheckedCreateWithoutCandidatInput> | ResultatCreateWithoutCandidatInput[] | ResultatUncheckedCreateWithoutCandidatInput[]
    connectOrCreate?: ResultatCreateOrConnectWithoutCandidatInput | ResultatCreateOrConnectWithoutCandidatInput[]
    upsert?: ResultatUpsertWithWhereUniqueWithoutCandidatInput | ResultatUpsertWithWhereUniqueWithoutCandidatInput[]
    createMany?: ResultatCreateManyCandidatInputEnvelope
    set?: ResultatWhereUniqueInput | ResultatWhereUniqueInput[]
    disconnect?: ResultatWhereUniqueInput | ResultatWhereUniqueInput[]
    delete?: ResultatWhereUniqueInput | ResultatWhereUniqueInput[]
    connect?: ResultatWhereUniqueInput | ResultatWhereUniqueInput[]
    update?: ResultatUpdateWithWhereUniqueWithoutCandidatInput | ResultatUpdateWithWhereUniqueWithoutCandidatInput[]
    updateMany?: ResultatUpdateManyWithWhereWithoutCandidatInput | ResultatUpdateManyWithWhereWithoutCandidatInput[]
    deleteMany?: ResultatScalarWhereInput | ResultatScalarWhereInput[]
  }

  export type AnonymatUncheckedUpdateOneWithoutCandidatNestedInput = {
    create?: XOR<AnonymatCreateWithoutCandidatInput, AnonymatUncheckedCreateWithoutCandidatInput>
    connectOrCreate?: AnonymatCreateOrConnectWithoutCandidatInput
    upsert?: AnonymatUpsertWithoutCandidatInput
    disconnect?: AnonymatWhereInput | boolean
    delete?: AnonymatWhereInput | boolean
    connect?: AnonymatWhereUniqueInput
    update?: XOR<XOR<AnonymatUpdateToOneWithWhereWithoutCandidatInput, AnonymatUpdateWithoutCandidatInput>, AnonymatUncheckedUpdateWithoutCandidatInput>
  }

  export type MarkUncheckedUpdateOneWithoutCandidatNestedInput = {
    create?: XOR<MarkCreateWithoutCandidatInput, MarkUncheckedCreateWithoutCandidatInput>
    connectOrCreate?: MarkCreateOrConnectWithoutCandidatInput
    upsert?: MarkUpsertWithoutCandidatInput
    disconnect?: MarkWhereInput | boolean
    delete?: MarkWhereInput | boolean
    connect?: MarkWhereUniqueInput
    update?: XOR<XOR<MarkUpdateToOneWithWhereWithoutCandidatInput, MarkUpdateWithoutCandidatInput>, MarkUncheckedUpdateWithoutCandidatInput>
  }

  export type CandidatCreateNestedOneWithoutAnonymatInput = {
    create?: XOR<CandidatCreateWithoutAnonymatInput, CandidatUncheckedCreateWithoutAnonymatInput>
    connectOrCreate?: CandidatCreateOrConnectWithoutAnonymatInput
    connect?: CandidatWhereUniqueInput
  }

  export type CandidatUpdateOneRequiredWithoutAnonymatNestedInput = {
    create?: XOR<CandidatCreateWithoutAnonymatInput, CandidatUncheckedCreateWithoutAnonymatInput>
    connectOrCreate?: CandidatCreateOrConnectWithoutAnonymatInput
    upsert?: CandidatUpsertWithoutAnonymatInput
    connect?: CandidatWhereUniqueInput
    update?: XOR<XOR<CandidatUpdateToOneWithWhereWithoutAnonymatInput, CandidatUpdateWithoutAnonymatInput>, CandidatUncheckedUpdateWithoutAnonymatInput>
  }

  export type CentreCreateNestedManyWithoutZoneInput = {
    create?: XOR<CentreCreateWithoutZoneInput, CentreUncheckedCreateWithoutZoneInput> | CentreCreateWithoutZoneInput[] | CentreUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: CentreCreateOrConnectWithoutZoneInput | CentreCreateOrConnectWithoutZoneInput[]
    createMany?: CentreCreateManyZoneInputEnvelope
    connect?: CentreWhereUniqueInput | CentreWhereUniqueInput[]
  }

  export type EtablissementCreateNestedManyWithoutZoneInput = {
    create?: XOR<EtablissementCreateWithoutZoneInput, EtablissementUncheckedCreateWithoutZoneInput> | EtablissementCreateWithoutZoneInput[] | EtablissementUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: EtablissementCreateOrConnectWithoutZoneInput | EtablissementCreateOrConnectWithoutZoneInput[]
    createMany?: EtablissementCreateManyZoneInputEnvelope
    connect?: EtablissementWhereUniqueInput | EtablissementWhereUniqueInput[]
  }

  export type CentreUncheckedCreateNestedManyWithoutZoneInput = {
    create?: XOR<CentreCreateWithoutZoneInput, CentreUncheckedCreateWithoutZoneInput> | CentreCreateWithoutZoneInput[] | CentreUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: CentreCreateOrConnectWithoutZoneInput | CentreCreateOrConnectWithoutZoneInput[]
    createMany?: CentreCreateManyZoneInputEnvelope
    connect?: CentreWhereUniqueInput | CentreWhereUniqueInput[]
  }

  export type EtablissementUncheckedCreateNestedManyWithoutZoneInput = {
    create?: XOR<EtablissementCreateWithoutZoneInput, EtablissementUncheckedCreateWithoutZoneInput> | EtablissementCreateWithoutZoneInput[] | EtablissementUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: EtablissementCreateOrConnectWithoutZoneInput | EtablissementCreateOrConnectWithoutZoneInput[]
    createMany?: EtablissementCreateManyZoneInputEnvelope
    connect?: EtablissementWhereUniqueInput | EtablissementWhereUniqueInput[]
  }

  export type CentreUpdateManyWithoutZoneNestedInput = {
    create?: XOR<CentreCreateWithoutZoneInput, CentreUncheckedCreateWithoutZoneInput> | CentreCreateWithoutZoneInput[] | CentreUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: CentreCreateOrConnectWithoutZoneInput | CentreCreateOrConnectWithoutZoneInput[]
    upsert?: CentreUpsertWithWhereUniqueWithoutZoneInput | CentreUpsertWithWhereUniqueWithoutZoneInput[]
    createMany?: CentreCreateManyZoneInputEnvelope
    set?: CentreWhereUniqueInput | CentreWhereUniqueInput[]
    disconnect?: CentreWhereUniqueInput | CentreWhereUniqueInput[]
    delete?: CentreWhereUniqueInput | CentreWhereUniqueInput[]
    connect?: CentreWhereUniqueInput | CentreWhereUniqueInput[]
    update?: CentreUpdateWithWhereUniqueWithoutZoneInput | CentreUpdateWithWhereUniqueWithoutZoneInput[]
    updateMany?: CentreUpdateManyWithWhereWithoutZoneInput | CentreUpdateManyWithWhereWithoutZoneInput[]
    deleteMany?: CentreScalarWhereInput | CentreScalarWhereInput[]
  }

  export type EtablissementUpdateManyWithoutZoneNestedInput = {
    create?: XOR<EtablissementCreateWithoutZoneInput, EtablissementUncheckedCreateWithoutZoneInput> | EtablissementCreateWithoutZoneInput[] | EtablissementUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: EtablissementCreateOrConnectWithoutZoneInput | EtablissementCreateOrConnectWithoutZoneInput[]
    upsert?: EtablissementUpsertWithWhereUniqueWithoutZoneInput | EtablissementUpsertWithWhereUniqueWithoutZoneInput[]
    createMany?: EtablissementCreateManyZoneInputEnvelope
    set?: EtablissementWhereUniqueInput | EtablissementWhereUniqueInput[]
    disconnect?: EtablissementWhereUniqueInput | EtablissementWhereUniqueInput[]
    delete?: EtablissementWhereUniqueInput | EtablissementWhereUniqueInput[]
    connect?: EtablissementWhereUniqueInput | EtablissementWhereUniqueInput[]
    update?: EtablissementUpdateWithWhereUniqueWithoutZoneInput | EtablissementUpdateWithWhereUniqueWithoutZoneInput[]
    updateMany?: EtablissementUpdateManyWithWhereWithoutZoneInput | EtablissementUpdateManyWithWhereWithoutZoneInput[]
    deleteMany?: EtablissementScalarWhereInput | EtablissementScalarWhereInput[]
  }

  export type CentreUncheckedUpdateManyWithoutZoneNestedInput = {
    create?: XOR<CentreCreateWithoutZoneInput, CentreUncheckedCreateWithoutZoneInput> | CentreCreateWithoutZoneInput[] | CentreUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: CentreCreateOrConnectWithoutZoneInput | CentreCreateOrConnectWithoutZoneInput[]
    upsert?: CentreUpsertWithWhereUniqueWithoutZoneInput | CentreUpsertWithWhereUniqueWithoutZoneInput[]
    createMany?: CentreCreateManyZoneInputEnvelope
    set?: CentreWhereUniqueInput | CentreWhereUniqueInput[]
    disconnect?: CentreWhereUniqueInput | CentreWhereUniqueInput[]
    delete?: CentreWhereUniqueInput | CentreWhereUniqueInput[]
    connect?: CentreWhereUniqueInput | CentreWhereUniqueInput[]
    update?: CentreUpdateWithWhereUniqueWithoutZoneInput | CentreUpdateWithWhereUniqueWithoutZoneInput[]
    updateMany?: CentreUpdateManyWithWhereWithoutZoneInput | CentreUpdateManyWithWhereWithoutZoneInput[]
    deleteMany?: CentreScalarWhereInput | CentreScalarWhereInput[]
  }

  export type EtablissementUncheckedUpdateManyWithoutZoneNestedInput = {
    create?: XOR<EtablissementCreateWithoutZoneInput, EtablissementUncheckedCreateWithoutZoneInput> | EtablissementCreateWithoutZoneInput[] | EtablissementUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: EtablissementCreateOrConnectWithoutZoneInput | EtablissementCreateOrConnectWithoutZoneInput[]
    upsert?: EtablissementUpsertWithWhereUniqueWithoutZoneInput | EtablissementUpsertWithWhereUniqueWithoutZoneInput[]
    createMany?: EtablissementCreateManyZoneInputEnvelope
    set?: EtablissementWhereUniqueInput | EtablissementWhereUniqueInput[]
    disconnect?: EtablissementWhereUniqueInput | EtablissementWhereUniqueInput[]
    delete?: EtablissementWhereUniqueInput | EtablissementWhereUniqueInput[]
    connect?: EtablissementWhereUniqueInput | EtablissementWhereUniqueInput[]
    update?: EtablissementUpdateWithWhereUniqueWithoutZoneInput | EtablissementUpdateWithWhereUniqueWithoutZoneInput[]
    updateMany?: EtablissementUpdateManyWithWhereWithoutZoneInput | EtablissementUpdateManyWithWhereWithoutZoneInput[]
    deleteMany?: EtablissementScalarWhereInput | EtablissementScalarWhereInput[]
  }

  export type ZoneCreateNestedOneWithoutCentresInput = {
    create?: XOR<ZoneCreateWithoutCentresInput, ZoneUncheckedCreateWithoutCentresInput>
    connectOrCreate?: ZoneCreateOrConnectWithoutCentresInput
    connect?: ZoneWhereUniqueInput
  }

  export type JuryCreateNestedManyWithoutCentreInput = {
    create?: XOR<JuryCreateWithoutCentreInput, JuryUncheckedCreateWithoutCentreInput> | JuryCreateWithoutCentreInput[] | JuryUncheckedCreateWithoutCentreInput[]
    connectOrCreate?: JuryCreateOrConnectWithoutCentreInput | JuryCreateOrConnectWithoutCentreInput[]
    createMany?: JuryCreateManyCentreInputEnvelope
    connect?: JuryWhereUniqueInput | JuryWhereUniqueInput[]
  }

  export type JuryUncheckedCreateNestedManyWithoutCentreInput = {
    create?: XOR<JuryCreateWithoutCentreInput, JuryUncheckedCreateWithoutCentreInput> | JuryCreateWithoutCentreInput[] | JuryUncheckedCreateWithoutCentreInput[]
    connectOrCreate?: JuryCreateOrConnectWithoutCentreInput | JuryCreateOrConnectWithoutCentreInput[]
    createMany?: JuryCreateManyCentreInputEnvelope
    connect?: JuryWhereUniqueInput | JuryWhereUniqueInput[]
  }

  export type ZoneUpdateOneRequiredWithoutCentresNestedInput = {
    create?: XOR<ZoneCreateWithoutCentresInput, ZoneUncheckedCreateWithoutCentresInput>
    connectOrCreate?: ZoneCreateOrConnectWithoutCentresInput
    upsert?: ZoneUpsertWithoutCentresInput
    connect?: ZoneWhereUniqueInput
    update?: XOR<XOR<ZoneUpdateToOneWithWhereWithoutCentresInput, ZoneUpdateWithoutCentresInput>, ZoneUncheckedUpdateWithoutCentresInput>
  }

  export type JuryUpdateManyWithoutCentreNestedInput = {
    create?: XOR<JuryCreateWithoutCentreInput, JuryUncheckedCreateWithoutCentreInput> | JuryCreateWithoutCentreInput[] | JuryUncheckedCreateWithoutCentreInput[]
    connectOrCreate?: JuryCreateOrConnectWithoutCentreInput | JuryCreateOrConnectWithoutCentreInput[]
    upsert?: JuryUpsertWithWhereUniqueWithoutCentreInput | JuryUpsertWithWhereUniqueWithoutCentreInput[]
    createMany?: JuryCreateManyCentreInputEnvelope
    set?: JuryWhereUniqueInput | JuryWhereUniqueInput[]
    disconnect?: JuryWhereUniqueInput | JuryWhereUniqueInput[]
    delete?: JuryWhereUniqueInput | JuryWhereUniqueInput[]
    connect?: JuryWhereUniqueInput | JuryWhereUniqueInput[]
    update?: JuryUpdateWithWhereUniqueWithoutCentreInput | JuryUpdateWithWhereUniqueWithoutCentreInput[]
    updateMany?: JuryUpdateManyWithWhereWithoutCentreInput | JuryUpdateManyWithWhereWithoutCentreInput[]
    deleteMany?: JuryScalarWhereInput | JuryScalarWhereInput[]
  }

  export type JuryUncheckedUpdateManyWithoutCentreNestedInput = {
    create?: XOR<JuryCreateWithoutCentreInput, JuryUncheckedCreateWithoutCentreInput> | JuryCreateWithoutCentreInput[] | JuryUncheckedCreateWithoutCentreInput[]
    connectOrCreate?: JuryCreateOrConnectWithoutCentreInput | JuryCreateOrConnectWithoutCentreInput[]
    upsert?: JuryUpsertWithWhereUniqueWithoutCentreInput | JuryUpsertWithWhereUniqueWithoutCentreInput[]
    createMany?: JuryCreateManyCentreInputEnvelope
    set?: JuryWhereUniqueInput | JuryWhereUniqueInput[]
    disconnect?: JuryWhereUniqueInput | JuryWhereUniqueInput[]
    delete?: JuryWhereUniqueInput | JuryWhereUniqueInput[]
    connect?: JuryWhereUniqueInput | JuryWhereUniqueInput[]
    update?: JuryUpdateWithWhereUniqueWithoutCentreInput | JuryUpdateWithWhereUniqueWithoutCentreInput[]
    updateMany?: JuryUpdateManyWithWhereWithoutCentreInput | JuryUpdateManyWithWhereWithoutCentreInput[]
    deleteMany?: JuryScalarWhereInput | JuryScalarWhereInput[]
  }

  export type ZoneCreateNestedOneWithoutEtablissementsInput = {
    create?: XOR<ZoneCreateWithoutEtablissementsInput, ZoneUncheckedCreateWithoutEtablissementsInput>
    connectOrCreate?: ZoneCreateOrConnectWithoutEtablissementsInput
    connect?: ZoneWhereUniqueInput
  }

  export type CandidatCreateNestedManyWithoutEtablissementInput = {
    create?: XOR<CandidatCreateWithoutEtablissementInput, CandidatUncheckedCreateWithoutEtablissementInput> | CandidatCreateWithoutEtablissementInput[] | CandidatUncheckedCreateWithoutEtablissementInput[]
    connectOrCreate?: CandidatCreateOrConnectWithoutEtablissementInput | CandidatCreateOrConnectWithoutEtablissementInput[]
    createMany?: CandidatCreateManyEtablissementInputEnvelope
    connect?: CandidatWhereUniqueInput | CandidatWhereUniqueInput[]
  }

  export type CandidatUncheckedCreateNestedManyWithoutEtablissementInput = {
    create?: XOR<CandidatCreateWithoutEtablissementInput, CandidatUncheckedCreateWithoutEtablissementInput> | CandidatCreateWithoutEtablissementInput[] | CandidatUncheckedCreateWithoutEtablissementInput[]
    connectOrCreate?: CandidatCreateOrConnectWithoutEtablissementInput | CandidatCreateOrConnectWithoutEtablissementInput[]
    createMany?: CandidatCreateManyEtablissementInputEnvelope
    connect?: CandidatWhereUniqueInput | CandidatWhereUniqueInput[]
  }

  export type ZoneUpdateOneRequiredWithoutEtablissementsNestedInput = {
    create?: XOR<ZoneCreateWithoutEtablissementsInput, ZoneUncheckedCreateWithoutEtablissementsInput>
    connectOrCreate?: ZoneCreateOrConnectWithoutEtablissementsInput
    upsert?: ZoneUpsertWithoutEtablissementsInput
    connect?: ZoneWhereUniqueInput
    update?: XOR<XOR<ZoneUpdateToOneWithWhereWithoutEtablissementsInput, ZoneUpdateWithoutEtablissementsInput>, ZoneUncheckedUpdateWithoutEtablissementsInput>
  }

  export type CandidatUpdateManyWithoutEtablissementNestedInput = {
    create?: XOR<CandidatCreateWithoutEtablissementInput, CandidatUncheckedCreateWithoutEtablissementInput> | CandidatCreateWithoutEtablissementInput[] | CandidatUncheckedCreateWithoutEtablissementInput[]
    connectOrCreate?: CandidatCreateOrConnectWithoutEtablissementInput | CandidatCreateOrConnectWithoutEtablissementInput[]
    upsert?: CandidatUpsertWithWhereUniqueWithoutEtablissementInput | CandidatUpsertWithWhereUniqueWithoutEtablissementInput[]
    createMany?: CandidatCreateManyEtablissementInputEnvelope
    set?: CandidatWhereUniqueInput | CandidatWhereUniqueInput[]
    disconnect?: CandidatWhereUniqueInput | CandidatWhereUniqueInput[]
    delete?: CandidatWhereUniqueInput | CandidatWhereUniqueInput[]
    connect?: CandidatWhereUniqueInput | CandidatWhereUniqueInput[]
    update?: CandidatUpdateWithWhereUniqueWithoutEtablissementInput | CandidatUpdateWithWhereUniqueWithoutEtablissementInput[]
    updateMany?: CandidatUpdateManyWithWhereWithoutEtablissementInput | CandidatUpdateManyWithWhereWithoutEtablissementInput[]
    deleteMany?: CandidatScalarWhereInput | CandidatScalarWhereInput[]
  }

  export type CandidatUncheckedUpdateManyWithoutEtablissementNestedInput = {
    create?: XOR<CandidatCreateWithoutEtablissementInput, CandidatUncheckedCreateWithoutEtablissementInput> | CandidatCreateWithoutEtablissementInput[] | CandidatUncheckedCreateWithoutEtablissementInput[]
    connectOrCreate?: CandidatCreateOrConnectWithoutEtablissementInput | CandidatCreateOrConnectWithoutEtablissementInput[]
    upsert?: CandidatUpsertWithWhereUniqueWithoutEtablissementInput | CandidatUpsertWithWhereUniqueWithoutEtablissementInput[]
    createMany?: CandidatCreateManyEtablissementInputEnvelope
    set?: CandidatWhereUniqueInput | CandidatWhereUniqueInput[]
    disconnect?: CandidatWhereUniqueInput | CandidatWhereUniqueInput[]
    delete?: CandidatWhereUniqueInput | CandidatWhereUniqueInput[]
    connect?: CandidatWhereUniqueInput | CandidatWhereUniqueInput[]
    update?: CandidatUpdateWithWhereUniqueWithoutEtablissementInput | CandidatUpdateWithWhereUniqueWithoutEtablissementInput[]
    updateMany?: CandidatUpdateManyWithWhereWithoutEtablissementInput | CandidatUpdateManyWithWhereWithoutEtablissementInput[]
    deleteMany?: CandidatScalarWhereInput | CandidatScalarWhereInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CentreCreateNestedOneWithoutJurysInput = {
    create?: XOR<CentreCreateWithoutJurysInput, CentreUncheckedCreateWithoutJurysInput>
    connectOrCreate?: CentreCreateOrConnectWithoutJurysInput
    connect?: CentreWhereUniqueInput
  }

  export type CentreUpdateOneWithoutJurysNestedInput = {
    create?: XOR<CentreCreateWithoutJurysInput, CentreUncheckedCreateWithoutJurysInput>
    connectOrCreate?: CentreCreateOrConnectWithoutJurysInput
    upsert?: CentreUpsertWithoutJurysInput
    disconnect?: CentreWhereInput | boolean
    delete?: CentreWhereInput | boolean
    connect?: CentreWhereUniqueInput
    update?: XOR<XOR<CentreUpdateToOneWithWhereWithoutJurysInput, CentreUpdateWithoutJurysInput>, CentreUncheckedUpdateWithoutJurysInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NoteCreateNestedManyWithoutMatiereInput = {
    create?: XOR<NoteCreateWithoutMatiereInput, NoteUncheckedCreateWithoutMatiereInput> | NoteCreateWithoutMatiereInput[] | NoteUncheckedCreateWithoutMatiereInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutMatiereInput | NoteCreateOrConnectWithoutMatiereInput[]
    createMany?: NoteCreateManyMatiereInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutMatiereInput = {
    create?: XOR<NoteCreateWithoutMatiereInput, NoteUncheckedCreateWithoutMatiereInput> | NoteCreateWithoutMatiereInput[] | NoteUncheckedCreateWithoutMatiereInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutMatiereInput | NoteCreateOrConnectWithoutMatiereInput[]
    createMany?: NoteCreateManyMatiereInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type NoteUpdateManyWithoutMatiereNestedInput = {
    create?: XOR<NoteCreateWithoutMatiereInput, NoteUncheckedCreateWithoutMatiereInput> | NoteCreateWithoutMatiereInput[] | NoteUncheckedCreateWithoutMatiereInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutMatiereInput | NoteCreateOrConnectWithoutMatiereInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutMatiereInput | NoteUpsertWithWhereUniqueWithoutMatiereInput[]
    createMany?: NoteCreateManyMatiereInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutMatiereInput | NoteUpdateWithWhereUniqueWithoutMatiereInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutMatiereInput | NoteUpdateManyWithWhereWithoutMatiereInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutMatiereNestedInput = {
    create?: XOR<NoteCreateWithoutMatiereInput, NoteUncheckedCreateWithoutMatiereInput> | NoteCreateWithoutMatiereInput[] | NoteUncheckedCreateWithoutMatiereInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutMatiereInput | NoteCreateOrConnectWithoutMatiereInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutMatiereInput | NoteUpsertWithWhereUniqueWithoutMatiereInput[]
    createMany?: NoteCreateManyMatiereInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutMatiereInput | NoteUpdateWithWhereUniqueWithoutMatiereInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutMatiereInput | NoteUpdateManyWithWhereWithoutMatiereInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type CandidatCreateNestedOneWithoutNotesInput = {
    create?: XOR<CandidatCreateWithoutNotesInput, CandidatUncheckedCreateWithoutNotesInput>
    connectOrCreate?: CandidatCreateOrConnectWithoutNotesInput
    connect?: CandidatWhereUniqueInput
  }

  export type MatiereCreateNestedOneWithoutNotesInput = {
    create?: XOR<MatiereCreateWithoutNotesInput, MatiereUncheckedCreateWithoutNotesInput>
    connectOrCreate?: MatiereCreateOrConnectWithoutNotesInput
    connect?: MatiereWhereUniqueInput
  }

  export type CandidatUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<CandidatCreateWithoutNotesInput, CandidatUncheckedCreateWithoutNotesInput>
    connectOrCreate?: CandidatCreateOrConnectWithoutNotesInput
    upsert?: CandidatUpsertWithoutNotesInput
    connect?: CandidatWhereUniqueInput
    update?: XOR<XOR<CandidatUpdateToOneWithWhereWithoutNotesInput, CandidatUpdateWithoutNotesInput>, CandidatUncheckedUpdateWithoutNotesInput>
  }

  export type MatiereUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<MatiereCreateWithoutNotesInput, MatiereUncheckedCreateWithoutNotesInput>
    connectOrCreate?: MatiereCreateOrConnectWithoutNotesInput
    upsert?: MatiereUpsertWithoutNotesInput
    connect?: MatiereWhereUniqueInput
    update?: XOR<XOR<MatiereUpdateToOneWithWhereWithoutNotesInput, MatiereUpdateWithoutNotesInput>, MatiereUncheckedUpdateWithoutNotesInput>
  }

  export type CandidatCreateNestedOneWithoutResultatsInput = {
    create?: XOR<CandidatCreateWithoutResultatsInput, CandidatUncheckedCreateWithoutResultatsInput>
    connectOrCreate?: CandidatCreateOrConnectWithoutResultatsInput
    connect?: CandidatWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CandidatUpdateOneRequiredWithoutResultatsNestedInput = {
    create?: XOR<CandidatCreateWithoutResultatsInput, CandidatUncheckedCreateWithoutResultatsInput>
    connectOrCreate?: CandidatCreateOrConnectWithoutResultatsInput
    upsert?: CandidatUpsertWithoutResultatsInput
    connect?: CandidatWhereUniqueInput
    update?: XOR<XOR<CandidatUpdateToOneWithWhereWithoutResultatsInput, CandidatUpdateWithoutResultatsInput>, CandidatUncheckedUpdateWithoutResultatsInput>
  }

  export type CandidatCreateNestedOneWithoutMarkInput = {
    create?: XOR<CandidatCreateWithoutMarkInput, CandidatUncheckedCreateWithoutMarkInput>
    connectOrCreate?: CandidatCreateOrConnectWithoutMarkInput
    connect?: CandidatWhereUniqueInput
  }

  export type CandidatUpdateOneRequiredWithoutMarkNestedInput = {
    create?: XOR<CandidatCreateWithoutMarkInput, CandidatUncheckedCreateWithoutMarkInput>
    connectOrCreate?: CandidatCreateOrConnectWithoutMarkInput
    upsert?: CandidatUpsertWithoutMarkInput
    connect?: CandidatWhereUniqueInput
    update?: XOR<XOR<CandidatUpdateToOneWithWhereWithoutMarkInput, CandidatUpdateWithoutMarkInput>, CandidatUncheckedUpdateWithoutMarkInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EtablissementCreateWithoutCandidatsInput = {
    name: string
    slug: string
    zone: ZoneCreateNestedOneWithoutEtablissementsInput
  }

  export type EtablissementUncheckedCreateWithoutCandidatsInput = {
    id?: number
    name: string
    slug: string
    zoneId: number
  }

  export type EtablissementCreateOrConnectWithoutCandidatsInput = {
    where: EtablissementWhereUniqueInput
    create: XOR<EtablissementCreateWithoutCandidatsInput, EtablissementUncheckedCreateWithoutCandidatsInput>
  }

  export type NoteCreateWithoutCandidatInput = {
    score?: number
    groupe_id: number
    matiere: MatiereCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateWithoutCandidatInput = {
    id?: number
    matiere_id: number
    score?: number
    groupe_id: number
  }

  export type NoteCreateOrConnectWithoutCandidatInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutCandidatInput, NoteUncheckedCreateWithoutCandidatInput>
  }

  export type NoteCreateManyCandidatInputEnvelope = {
    data: NoteCreateManyCandidatInput | NoteCreateManyCandidatInput[]
    skipDuplicates?: boolean
  }

  export type ResultatCreateWithoutCandidatInput = {
    total?: number | null
    moyenne?: number | null
    rang?: number | null
  }

  export type ResultatUncheckedCreateWithoutCandidatInput = {
    id?: number
    total?: number | null
    moyenne?: number | null
    rang?: number | null
  }

  export type ResultatCreateOrConnectWithoutCandidatInput = {
    where: ResultatWhereUniqueInput
    create: XOR<ResultatCreateWithoutCandidatInput, ResultatUncheckedCreateWithoutCandidatInput>
  }

  export type ResultatCreateManyCandidatInputEnvelope = {
    data: ResultatCreateManyCandidatInput | ResultatCreateManyCandidatInput[]
    skipDuplicates?: boolean
  }

  export type AnonymatCreateWithoutCandidatInput = {
    code: string
  }

  export type AnonymatUncheckedCreateWithoutCandidatInput = {
    id?: number
    code: string
  }

  export type AnonymatCreateOrConnectWithoutCandidatInput = {
    where: AnonymatWhereUniqueInput
    create: XOR<AnonymatCreateWithoutCandidatInput, AnonymatUncheckedCreateWithoutCandidatInput>
  }

  export type MarkCreateWithoutCandidatInput = {
    numcorrection: string
    red?: number
    dic?: number
    tsq?: number
    svt?: number
    lv1?: number
    mat?: number
    hg?: number
    ec?: number
    sp?: number
    part?: number
    orale?: number
  }

  export type MarkUncheckedCreateWithoutCandidatInput = {
    id?: number
    numcorrection: string
    red?: number
    dic?: number
    tsq?: number
    svt?: number
    lv1?: number
    mat?: number
    hg?: number
    ec?: number
    sp?: number
    part?: number
    orale?: number
  }

  export type MarkCreateOrConnectWithoutCandidatInput = {
    where: MarkWhereUniqueInput
    create: XOR<MarkCreateWithoutCandidatInput, MarkUncheckedCreateWithoutCandidatInput>
  }

  export type EtablissementUpsertWithoutCandidatsInput = {
    update: XOR<EtablissementUpdateWithoutCandidatsInput, EtablissementUncheckedUpdateWithoutCandidatsInput>
    create: XOR<EtablissementCreateWithoutCandidatsInput, EtablissementUncheckedCreateWithoutCandidatsInput>
    where?: EtablissementWhereInput
  }

  export type EtablissementUpdateToOneWithWhereWithoutCandidatsInput = {
    where?: EtablissementWhereInput
    data: XOR<EtablissementUpdateWithoutCandidatsInput, EtablissementUncheckedUpdateWithoutCandidatsInput>
  }

  export type EtablissementUpdateWithoutCandidatsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    zone?: ZoneUpdateOneRequiredWithoutEtablissementsNestedInput
  }

  export type EtablissementUncheckedUpdateWithoutCandidatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    zoneId?: IntFieldUpdateOperationsInput | number
  }

  export type NoteUpsertWithWhereUniqueWithoutCandidatInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutCandidatInput, NoteUncheckedUpdateWithoutCandidatInput>
    create: XOR<NoteCreateWithoutCandidatInput, NoteUncheckedCreateWithoutCandidatInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutCandidatInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutCandidatInput, NoteUncheckedUpdateWithoutCandidatInput>
  }

  export type NoteUpdateManyWithWhereWithoutCandidatInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutCandidatInput>
  }

  export type NoteScalarWhereInput = {
    AND?: NoteScalarWhereInput | NoteScalarWhereInput[]
    OR?: NoteScalarWhereInput[]
    NOT?: NoteScalarWhereInput | NoteScalarWhereInput[]
    id?: IntFilter<"Note"> | number
    candidat_id?: IntFilter<"Note"> | number
    matiere_id?: IntFilter<"Note"> | number
    score?: FloatFilter<"Note"> | number
    groupe_id?: IntFilter<"Note"> | number
  }

  export type ResultatUpsertWithWhereUniqueWithoutCandidatInput = {
    where: ResultatWhereUniqueInput
    update: XOR<ResultatUpdateWithoutCandidatInput, ResultatUncheckedUpdateWithoutCandidatInput>
    create: XOR<ResultatCreateWithoutCandidatInput, ResultatUncheckedCreateWithoutCandidatInput>
  }

  export type ResultatUpdateWithWhereUniqueWithoutCandidatInput = {
    where: ResultatWhereUniqueInput
    data: XOR<ResultatUpdateWithoutCandidatInput, ResultatUncheckedUpdateWithoutCandidatInput>
  }

  export type ResultatUpdateManyWithWhereWithoutCandidatInput = {
    where: ResultatScalarWhereInput
    data: XOR<ResultatUpdateManyMutationInput, ResultatUncheckedUpdateManyWithoutCandidatInput>
  }

  export type ResultatScalarWhereInput = {
    AND?: ResultatScalarWhereInput | ResultatScalarWhereInput[]
    OR?: ResultatScalarWhereInput[]
    NOT?: ResultatScalarWhereInput | ResultatScalarWhereInput[]
    id?: IntFilter<"Resultat"> | number
    candidat_id?: IntFilter<"Resultat"> | number
    total?: FloatNullableFilter<"Resultat"> | number | null
    moyenne?: FloatNullableFilter<"Resultat"> | number | null
    rang?: IntNullableFilter<"Resultat"> | number | null
  }

  export type AnonymatUpsertWithoutCandidatInput = {
    update: XOR<AnonymatUpdateWithoutCandidatInput, AnonymatUncheckedUpdateWithoutCandidatInput>
    create: XOR<AnonymatCreateWithoutCandidatInput, AnonymatUncheckedCreateWithoutCandidatInput>
    where?: AnonymatWhereInput
  }

  export type AnonymatUpdateToOneWithWhereWithoutCandidatInput = {
    where?: AnonymatWhereInput
    data: XOR<AnonymatUpdateWithoutCandidatInput, AnonymatUncheckedUpdateWithoutCandidatInput>
  }

  export type AnonymatUpdateWithoutCandidatInput = {
    code?: StringFieldUpdateOperationsInput | string
  }

  export type AnonymatUncheckedUpdateWithoutCandidatInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
  }

  export type MarkUpsertWithoutCandidatInput = {
    update: XOR<MarkUpdateWithoutCandidatInput, MarkUncheckedUpdateWithoutCandidatInput>
    create: XOR<MarkCreateWithoutCandidatInput, MarkUncheckedCreateWithoutCandidatInput>
    where?: MarkWhereInput
  }

  export type MarkUpdateToOneWithWhereWithoutCandidatInput = {
    where?: MarkWhereInput
    data: XOR<MarkUpdateWithoutCandidatInput, MarkUncheckedUpdateWithoutCandidatInput>
  }

  export type MarkUpdateWithoutCandidatInput = {
    numcorrection?: StringFieldUpdateOperationsInput | string
    red?: FloatFieldUpdateOperationsInput | number
    dic?: FloatFieldUpdateOperationsInput | number
    tsq?: FloatFieldUpdateOperationsInput | number
    svt?: FloatFieldUpdateOperationsInput | number
    lv1?: FloatFieldUpdateOperationsInput | number
    mat?: FloatFieldUpdateOperationsInput | number
    hg?: FloatFieldUpdateOperationsInput | number
    ec?: FloatFieldUpdateOperationsInput | number
    sp?: FloatFieldUpdateOperationsInput | number
    part?: FloatFieldUpdateOperationsInput | number
    orale?: FloatFieldUpdateOperationsInput | number
  }

  export type MarkUncheckedUpdateWithoutCandidatInput = {
    id?: IntFieldUpdateOperationsInput | number
    numcorrection?: StringFieldUpdateOperationsInput | string
    red?: FloatFieldUpdateOperationsInput | number
    dic?: FloatFieldUpdateOperationsInput | number
    tsq?: FloatFieldUpdateOperationsInput | number
    svt?: FloatFieldUpdateOperationsInput | number
    lv1?: FloatFieldUpdateOperationsInput | number
    mat?: FloatFieldUpdateOperationsInput | number
    hg?: FloatFieldUpdateOperationsInput | number
    ec?: FloatFieldUpdateOperationsInput | number
    sp?: FloatFieldUpdateOperationsInput | number
    part?: FloatFieldUpdateOperationsInput | number
    orale?: FloatFieldUpdateOperationsInput | number
  }

  export type CandidatCreateWithoutAnonymatInput = {
    prenoms: string
    nom: string
    date_naissance: Date | string
    lieu_naissance: string
    sexe?: string
    aptitude?: string
    section?: string
    option?: string
    etat?: boolean
    etablissement: EtablissementCreateNestedOneWithoutCandidatsInput
    notes?: NoteCreateNestedManyWithoutCandidatInput
    resultats?: ResultatCreateNestedManyWithoutCandidatInput
    mark?: MarkCreateNestedOneWithoutCandidatInput
  }

  export type CandidatUncheckedCreateWithoutAnonymatInput = {
    id?: number
    prenoms: string
    nom: string
    date_naissance: Date | string
    lieu_naissance: string
    sexe?: string
    aptitude?: string
    section?: string
    option?: string
    etat?: boolean
    etablissement_id: number
    notes?: NoteUncheckedCreateNestedManyWithoutCandidatInput
    resultats?: ResultatUncheckedCreateNestedManyWithoutCandidatInput
    mark?: MarkUncheckedCreateNestedOneWithoutCandidatInput
  }

  export type CandidatCreateOrConnectWithoutAnonymatInput = {
    where: CandidatWhereUniqueInput
    create: XOR<CandidatCreateWithoutAnonymatInput, CandidatUncheckedCreateWithoutAnonymatInput>
  }

  export type CandidatUpsertWithoutAnonymatInput = {
    update: XOR<CandidatUpdateWithoutAnonymatInput, CandidatUncheckedUpdateWithoutAnonymatInput>
    create: XOR<CandidatCreateWithoutAnonymatInput, CandidatUncheckedCreateWithoutAnonymatInput>
    where?: CandidatWhereInput
  }

  export type CandidatUpdateToOneWithWhereWithoutAnonymatInput = {
    where?: CandidatWhereInput
    data: XOR<CandidatUpdateWithoutAnonymatInput, CandidatUncheckedUpdateWithoutAnonymatInput>
  }

  export type CandidatUpdateWithoutAnonymatInput = {
    prenoms?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieu_naissance?: StringFieldUpdateOperationsInput | string
    sexe?: StringFieldUpdateOperationsInput | string
    aptitude?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    etat?: BoolFieldUpdateOperationsInput | boolean
    etablissement?: EtablissementUpdateOneRequiredWithoutCandidatsNestedInput
    notes?: NoteUpdateManyWithoutCandidatNestedInput
    resultats?: ResultatUpdateManyWithoutCandidatNestedInput
    mark?: MarkUpdateOneWithoutCandidatNestedInput
  }

  export type CandidatUncheckedUpdateWithoutAnonymatInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenoms?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieu_naissance?: StringFieldUpdateOperationsInput | string
    sexe?: StringFieldUpdateOperationsInput | string
    aptitude?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    etat?: BoolFieldUpdateOperationsInput | boolean
    etablissement_id?: IntFieldUpdateOperationsInput | number
    notes?: NoteUncheckedUpdateManyWithoutCandidatNestedInput
    resultats?: ResultatUncheckedUpdateManyWithoutCandidatNestedInput
    mark?: MarkUncheckedUpdateOneWithoutCandidatNestedInput
  }

  export type CentreCreateWithoutZoneInput = {
    name?: string | null
    slug?: string | null
    contact?: string | null
    jurys?: JuryCreateNestedManyWithoutCentreInput
  }

  export type CentreUncheckedCreateWithoutZoneInput = {
    id?: number
    name?: string | null
    slug?: string | null
    contact?: string | null
    jurys?: JuryUncheckedCreateNestedManyWithoutCentreInput
  }

  export type CentreCreateOrConnectWithoutZoneInput = {
    where: CentreWhereUniqueInput
    create: XOR<CentreCreateWithoutZoneInput, CentreUncheckedCreateWithoutZoneInput>
  }

  export type CentreCreateManyZoneInputEnvelope = {
    data: CentreCreateManyZoneInput | CentreCreateManyZoneInput[]
    skipDuplicates?: boolean
  }

  export type EtablissementCreateWithoutZoneInput = {
    name: string
    slug: string
    candidats?: CandidatCreateNestedManyWithoutEtablissementInput
  }

  export type EtablissementUncheckedCreateWithoutZoneInput = {
    id?: number
    name: string
    slug: string
    candidats?: CandidatUncheckedCreateNestedManyWithoutEtablissementInput
  }

  export type EtablissementCreateOrConnectWithoutZoneInput = {
    where: EtablissementWhereUniqueInput
    create: XOR<EtablissementCreateWithoutZoneInput, EtablissementUncheckedCreateWithoutZoneInput>
  }

  export type EtablissementCreateManyZoneInputEnvelope = {
    data: EtablissementCreateManyZoneInput | EtablissementCreateManyZoneInput[]
    skipDuplicates?: boolean
  }

  export type CentreUpsertWithWhereUniqueWithoutZoneInput = {
    where: CentreWhereUniqueInput
    update: XOR<CentreUpdateWithoutZoneInput, CentreUncheckedUpdateWithoutZoneInput>
    create: XOR<CentreCreateWithoutZoneInput, CentreUncheckedCreateWithoutZoneInput>
  }

  export type CentreUpdateWithWhereUniqueWithoutZoneInput = {
    where: CentreWhereUniqueInput
    data: XOR<CentreUpdateWithoutZoneInput, CentreUncheckedUpdateWithoutZoneInput>
  }

  export type CentreUpdateManyWithWhereWithoutZoneInput = {
    where: CentreScalarWhereInput
    data: XOR<CentreUpdateManyMutationInput, CentreUncheckedUpdateManyWithoutZoneInput>
  }

  export type CentreScalarWhereInput = {
    AND?: CentreScalarWhereInput | CentreScalarWhereInput[]
    OR?: CentreScalarWhereInput[]
    NOT?: CentreScalarWhereInput | CentreScalarWhereInput[]
    id?: IntFilter<"Centre"> | number
    name?: StringNullableFilter<"Centre"> | string | null
    slug?: StringNullableFilter<"Centre"> | string | null
    contact?: StringNullableFilter<"Centre"> | string | null
    zoneId?: IntFilter<"Centre"> | number
  }

  export type EtablissementUpsertWithWhereUniqueWithoutZoneInput = {
    where: EtablissementWhereUniqueInput
    update: XOR<EtablissementUpdateWithoutZoneInput, EtablissementUncheckedUpdateWithoutZoneInput>
    create: XOR<EtablissementCreateWithoutZoneInput, EtablissementUncheckedCreateWithoutZoneInput>
  }

  export type EtablissementUpdateWithWhereUniqueWithoutZoneInput = {
    where: EtablissementWhereUniqueInput
    data: XOR<EtablissementUpdateWithoutZoneInput, EtablissementUncheckedUpdateWithoutZoneInput>
  }

  export type EtablissementUpdateManyWithWhereWithoutZoneInput = {
    where: EtablissementScalarWhereInput
    data: XOR<EtablissementUpdateManyMutationInput, EtablissementUncheckedUpdateManyWithoutZoneInput>
  }

  export type EtablissementScalarWhereInput = {
    AND?: EtablissementScalarWhereInput | EtablissementScalarWhereInput[]
    OR?: EtablissementScalarWhereInput[]
    NOT?: EtablissementScalarWhereInput | EtablissementScalarWhereInput[]
    id?: IntFilter<"Etablissement"> | number
    name?: StringFilter<"Etablissement"> | string
    slug?: StringFilter<"Etablissement"> | string
    zoneId?: IntFilter<"Etablissement"> | number
  }

  export type ZoneCreateWithoutCentresInput = {
    name: string
    slug: string
    responsable: string
    contact: string
    etablissements?: EtablissementCreateNestedManyWithoutZoneInput
  }

  export type ZoneUncheckedCreateWithoutCentresInput = {
    id?: number
    name: string
    slug: string
    responsable: string
    contact: string
    etablissements?: EtablissementUncheckedCreateNestedManyWithoutZoneInput
  }

  export type ZoneCreateOrConnectWithoutCentresInput = {
    where: ZoneWhereUniqueInput
    create: XOR<ZoneCreateWithoutCentresInput, ZoneUncheckedCreateWithoutCentresInput>
  }

  export type JuryCreateWithoutCentreInput = {
    numero: number
    president?: string | null
  }

  export type JuryUncheckedCreateWithoutCentreInput = {
    id?: number
    numero: number
    president?: string | null
  }

  export type JuryCreateOrConnectWithoutCentreInput = {
    where: JuryWhereUniqueInput
    create: XOR<JuryCreateWithoutCentreInput, JuryUncheckedCreateWithoutCentreInput>
  }

  export type JuryCreateManyCentreInputEnvelope = {
    data: JuryCreateManyCentreInput | JuryCreateManyCentreInput[]
    skipDuplicates?: boolean
  }

  export type ZoneUpsertWithoutCentresInput = {
    update: XOR<ZoneUpdateWithoutCentresInput, ZoneUncheckedUpdateWithoutCentresInput>
    create: XOR<ZoneCreateWithoutCentresInput, ZoneUncheckedCreateWithoutCentresInput>
    where?: ZoneWhereInput
  }

  export type ZoneUpdateToOneWithWhereWithoutCentresInput = {
    where?: ZoneWhereInput
    data: XOR<ZoneUpdateWithoutCentresInput, ZoneUncheckedUpdateWithoutCentresInput>
  }

  export type ZoneUpdateWithoutCentresInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    etablissements?: EtablissementUpdateManyWithoutZoneNestedInput
  }

  export type ZoneUncheckedUpdateWithoutCentresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    etablissements?: EtablissementUncheckedUpdateManyWithoutZoneNestedInput
  }

  export type JuryUpsertWithWhereUniqueWithoutCentreInput = {
    where: JuryWhereUniqueInput
    update: XOR<JuryUpdateWithoutCentreInput, JuryUncheckedUpdateWithoutCentreInput>
    create: XOR<JuryCreateWithoutCentreInput, JuryUncheckedCreateWithoutCentreInput>
  }

  export type JuryUpdateWithWhereUniqueWithoutCentreInput = {
    where: JuryWhereUniqueInput
    data: XOR<JuryUpdateWithoutCentreInput, JuryUncheckedUpdateWithoutCentreInput>
  }

  export type JuryUpdateManyWithWhereWithoutCentreInput = {
    where: JuryScalarWhereInput
    data: XOR<JuryUpdateManyMutationInput, JuryUncheckedUpdateManyWithoutCentreInput>
  }

  export type JuryScalarWhereInput = {
    AND?: JuryScalarWhereInput | JuryScalarWhereInput[]
    OR?: JuryScalarWhereInput[]
    NOT?: JuryScalarWhereInput | JuryScalarWhereInput[]
    id?: IntFilter<"Jury"> | number
    numero?: IntFilter<"Jury"> | number
    centre_id?: IntNullableFilter<"Jury"> | number | null
    president?: StringNullableFilter<"Jury"> | string | null
  }

  export type ZoneCreateWithoutEtablissementsInput = {
    name: string
    slug: string
    responsable: string
    contact: string
    centres?: CentreCreateNestedManyWithoutZoneInput
  }

  export type ZoneUncheckedCreateWithoutEtablissementsInput = {
    id?: number
    name: string
    slug: string
    responsable: string
    contact: string
    centres?: CentreUncheckedCreateNestedManyWithoutZoneInput
  }

  export type ZoneCreateOrConnectWithoutEtablissementsInput = {
    where: ZoneWhereUniqueInput
    create: XOR<ZoneCreateWithoutEtablissementsInput, ZoneUncheckedCreateWithoutEtablissementsInput>
  }

  export type CandidatCreateWithoutEtablissementInput = {
    prenoms: string
    nom: string
    date_naissance: Date | string
    lieu_naissance: string
    sexe?: string
    aptitude?: string
    section?: string
    option?: string
    etat?: boolean
    notes?: NoteCreateNestedManyWithoutCandidatInput
    resultats?: ResultatCreateNestedManyWithoutCandidatInput
    Anonymat?: AnonymatCreateNestedOneWithoutCandidatInput
    mark?: MarkCreateNestedOneWithoutCandidatInput
  }

  export type CandidatUncheckedCreateWithoutEtablissementInput = {
    id?: number
    prenoms: string
    nom: string
    date_naissance: Date | string
    lieu_naissance: string
    sexe?: string
    aptitude?: string
    section?: string
    option?: string
    etat?: boolean
    notes?: NoteUncheckedCreateNestedManyWithoutCandidatInput
    resultats?: ResultatUncheckedCreateNestedManyWithoutCandidatInput
    Anonymat?: AnonymatUncheckedCreateNestedOneWithoutCandidatInput
    mark?: MarkUncheckedCreateNestedOneWithoutCandidatInput
  }

  export type CandidatCreateOrConnectWithoutEtablissementInput = {
    where: CandidatWhereUniqueInput
    create: XOR<CandidatCreateWithoutEtablissementInput, CandidatUncheckedCreateWithoutEtablissementInput>
  }

  export type CandidatCreateManyEtablissementInputEnvelope = {
    data: CandidatCreateManyEtablissementInput | CandidatCreateManyEtablissementInput[]
    skipDuplicates?: boolean
  }

  export type ZoneUpsertWithoutEtablissementsInput = {
    update: XOR<ZoneUpdateWithoutEtablissementsInput, ZoneUncheckedUpdateWithoutEtablissementsInput>
    create: XOR<ZoneCreateWithoutEtablissementsInput, ZoneUncheckedCreateWithoutEtablissementsInput>
    where?: ZoneWhereInput
  }

  export type ZoneUpdateToOneWithWhereWithoutEtablissementsInput = {
    where?: ZoneWhereInput
    data: XOR<ZoneUpdateWithoutEtablissementsInput, ZoneUncheckedUpdateWithoutEtablissementsInput>
  }

  export type ZoneUpdateWithoutEtablissementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    centres?: CentreUpdateManyWithoutZoneNestedInput
  }

  export type ZoneUncheckedUpdateWithoutEtablissementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    centres?: CentreUncheckedUpdateManyWithoutZoneNestedInput
  }

  export type CandidatUpsertWithWhereUniqueWithoutEtablissementInput = {
    where: CandidatWhereUniqueInput
    update: XOR<CandidatUpdateWithoutEtablissementInput, CandidatUncheckedUpdateWithoutEtablissementInput>
    create: XOR<CandidatCreateWithoutEtablissementInput, CandidatUncheckedCreateWithoutEtablissementInput>
  }

  export type CandidatUpdateWithWhereUniqueWithoutEtablissementInput = {
    where: CandidatWhereUniqueInput
    data: XOR<CandidatUpdateWithoutEtablissementInput, CandidatUncheckedUpdateWithoutEtablissementInput>
  }

  export type CandidatUpdateManyWithWhereWithoutEtablissementInput = {
    where: CandidatScalarWhereInput
    data: XOR<CandidatUpdateManyMutationInput, CandidatUncheckedUpdateManyWithoutEtablissementInput>
  }

  export type CandidatScalarWhereInput = {
    AND?: CandidatScalarWhereInput | CandidatScalarWhereInput[]
    OR?: CandidatScalarWhereInput[]
    NOT?: CandidatScalarWhereInput | CandidatScalarWhereInput[]
    id?: IntFilter<"Candidat"> | number
    prenoms?: StringFilter<"Candidat"> | string
    nom?: StringFilter<"Candidat"> | string
    date_naissance?: DateTimeFilter<"Candidat"> | Date | string
    lieu_naissance?: StringFilter<"Candidat"> | string
    sexe?: StringFilter<"Candidat"> | string
    aptitude?: StringFilter<"Candidat"> | string
    section?: StringFilter<"Candidat"> | string
    option?: StringFilter<"Candidat"> | string
    etat?: BoolFilter<"Candidat"> | boolean
    etablissement_id?: IntFilter<"Candidat"> | number
  }

  export type CentreCreateWithoutJurysInput = {
    name?: string | null
    slug?: string | null
    contact?: string | null
    zone: ZoneCreateNestedOneWithoutCentresInput
  }

  export type CentreUncheckedCreateWithoutJurysInput = {
    id?: number
    name?: string | null
    slug?: string | null
    contact?: string | null
    zoneId: number
  }

  export type CentreCreateOrConnectWithoutJurysInput = {
    where: CentreWhereUniqueInput
    create: XOR<CentreCreateWithoutJurysInput, CentreUncheckedCreateWithoutJurysInput>
  }

  export type CentreUpsertWithoutJurysInput = {
    update: XOR<CentreUpdateWithoutJurysInput, CentreUncheckedUpdateWithoutJurysInput>
    create: XOR<CentreCreateWithoutJurysInput, CentreUncheckedCreateWithoutJurysInput>
    where?: CentreWhereInput
  }

  export type CentreUpdateToOneWithWhereWithoutJurysInput = {
    where?: CentreWhereInput
    data: XOR<CentreUpdateWithoutJurysInput, CentreUncheckedUpdateWithoutJurysInput>
  }

  export type CentreUpdateWithoutJurysInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: ZoneUpdateOneRequiredWithoutCentresNestedInput
  }

  export type CentreUncheckedUpdateWithoutJurysInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    zoneId?: IntFieldUpdateOperationsInput | number
  }

  export type NoteCreateWithoutMatiereInput = {
    score?: number
    groupe_id: number
    candidat: CandidatCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateWithoutMatiereInput = {
    id?: number
    candidat_id: number
    score?: number
    groupe_id: number
  }

  export type NoteCreateOrConnectWithoutMatiereInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutMatiereInput, NoteUncheckedCreateWithoutMatiereInput>
  }

  export type NoteCreateManyMatiereInputEnvelope = {
    data: NoteCreateManyMatiereInput | NoteCreateManyMatiereInput[]
    skipDuplicates?: boolean
  }

  export type NoteUpsertWithWhereUniqueWithoutMatiereInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutMatiereInput, NoteUncheckedUpdateWithoutMatiereInput>
    create: XOR<NoteCreateWithoutMatiereInput, NoteUncheckedCreateWithoutMatiereInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutMatiereInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutMatiereInput, NoteUncheckedUpdateWithoutMatiereInput>
  }

  export type NoteUpdateManyWithWhereWithoutMatiereInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutMatiereInput>
  }

  export type CandidatCreateWithoutNotesInput = {
    prenoms: string
    nom: string
    date_naissance: Date | string
    lieu_naissance: string
    sexe?: string
    aptitude?: string
    section?: string
    option?: string
    etat?: boolean
    etablissement: EtablissementCreateNestedOneWithoutCandidatsInput
    resultats?: ResultatCreateNestedManyWithoutCandidatInput
    Anonymat?: AnonymatCreateNestedOneWithoutCandidatInput
    mark?: MarkCreateNestedOneWithoutCandidatInput
  }

  export type CandidatUncheckedCreateWithoutNotesInput = {
    id?: number
    prenoms: string
    nom: string
    date_naissance: Date | string
    lieu_naissance: string
    sexe?: string
    aptitude?: string
    section?: string
    option?: string
    etat?: boolean
    etablissement_id: number
    resultats?: ResultatUncheckedCreateNestedManyWithoutCandidatInput
    Anonymat?: AnonymatUncheckedCreateNestedOneWithoutCandidatInput
    mark?: MarkUncheckedCreateNestedOneWithoutCandidatInput
  }

  export type CandidatCreateOrConnectWithoutNotesInput = {
    where: CandidatWhereUniqueInput
    create: XOR<CandidatCreateWithoutNotesInput, CandidatUncheckedCreateWithoutNotesInput>
  }

  export type MatiereCreateWithoutNotesInput = {
    name?: string | null
    slug?: number | null
    coefficient: number
  }

  export type MatiereUncheckedCreateWithoutNotesInput = {
    id?: number
    name?: string | null
    slug?: number | null
    coefficient: number
  }

  export type MatiereCreateOrConnectWithoutNotesInput = {
    where: MatiereWhereUniqueInput
    create: XOR<MatiereCreateWithoutNotesInput, MatiereUncheckedCreateWithoutNotesInput>
  }

  export type CandidatUpsertWithoutNotesInput = {
    update: XOR<CandidatUpdateWithoutNotesInput, CandidatUncheckedUpdateWithoutNotesInput>
    create: XOR<CandidatCreateWithoutNotesInput, CandidatUncheckedCreateWithoutNotesInput>
    where?: CandidatWhereInput
  }

  export type CandidatUpdateToOneWithWhereWithoutNotesInput = {
    where?: CandidatWhereInput
    data: XOR<CandidatUpdateWithoutNotesInput, CandidatUncheckedUpdateWithoutNotesInput>
  }

  export type CandidatUpdateWithoutNotesInput = {
    prenoms?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieu_naissance?: StringFieldUpdateOperationsInput | string
    sexe?: StringFieldUpdateOperationsInput | string
    aptitude?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    etat?: BoolFieldUpdateOperationsInput | boolean
    etablissement?: EtablissementUpdateOneRequiredWithoutCandidatsNestedInput
    resultats?: ResultatUpdateManyWithoutCandidatNestedInput
    Anonymat?: AnonymatUpdateOneWithoutCandidatNestedInput
    mark?: MarkUpdateOneWithoutCandidatNestedInput
  }

  export type CandidatUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenoms?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieu_naissance?: StringFieldUpdateOperationsInput | string
    sexe?: StringFieldUpdateOperationsInput | string
    aptitude?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    etat?: BoolFieldUpdateOperationsInput | boolean
    etablissement_id?: IntFieldUpdateOperationsInput | number
    resultats?: ResultatUncheckedUpdateManyWithoutCandidatNestedInput
    Anonymat?: AnonymatUncheckedUpdateOneWithoutCandidatNestedInput
    mark?: MarkUncheckedUpdateOneWithoutCandidatNestedInput
  }

  export type MatiereUpsertWithoutNotesInput = {
    update: XOR<MatiereUpdateWithoutNotesInput, MatiereUncheckedUpdateWithoutNotesInput>
    create: XOR<MatiereCreateWithoutNotesInput, MatiereUncheckedCreateWithoutNotesInput>
    where?: MatiereWhereInput
  }

  export type MatiereUpdateToOneWithWhereWithoutNotesInput = {
    where?: MatiereWhereInput
    data: XOR<MatiereUpdateWithoutNotesInput, MatiereUncheckedUpdateWithoutNotesInput>
  }

  export type MatiereUpdateWithoutNotesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableIntFieldUpdateOperationsInput | number | null
    coefficient?: IntFieldUpdateOperationsInput | number
  }

  export type MatiereUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableIntFieldUpdateOperationsInput | number | null
    coefficient?: IntFieldUpdateOperationsInput | number
  }

  export type CandidatCreateWithoutResultatsInput = {
    prenoms: string
    nom: string
    date_naissance: Date | string
    lieu_naissance: string
    sexe?: string
    aptitude?: string
    section?: string
    option?: string
    etat?: boolean
    etablissement: EtablissementCreateNestedOneWithoutCandidatsInput
    notes?: NoteCreateNestedManyWithoutCandidatInput
    Anonymat?: AnonymatCreateNestedOneWithoutCandidatInput
    mark?: MarkCreateNestedOneWithoutCandidatInput
  }

  export type CandidatUncheckedCreateWithoutResultatsInput = {
    id?: number
    prenoms: string
    nom: string
    date_naissance: Date | string
    lieu_naissance: string
    sexe?: string
    aptitude?: string
    section?: string
    option?: string
    etat?: boolean
    etablissement_id: number
    notes?: NoteUncheckedCreateNestedManyWithoutCandidatInput
    Anonymat?: AnonymatUncheckedCreateNestedOneWithoutCandidatInput
    mark?: MarkUncheckedCreateNestedOneWithoutCandidatInput
  }

  export type CandidatCreateOrConnectWithoutResultatsInput = {
    where: CandidatWhereUniqueInput
    create: XOR<CandidatCreateWithoutResultatsInput, CandidatUncheckedCreateWithoutResultatsInput>
  }

  export type CandidatUpsertWithoutResultatsInput = {
    update: XOR<CandidatUpdateWithoutResultatsInput, CandidatUncheckedUpdateWithoutResultatsInput>
    create: XOR<CandidatCreateWithoutResultatsInput, CandidatUncheckedCreateWithoutResultatsInput>
    where?: CandidatWhereInput
  }

  export type CandidatUpdateToOneWithWhereWithoutResultatsInput = {
    where?: CandidatWhereInput
    data: XOR<CandidatUpdateWithoutResultatsInput, CandidatUncheckedUpdateWithoutResultatsInput>
  }

  export type CandidatUpdateWithoutResultatsInput = {
    prenoms?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieu_naissance?: StringFieldUpdateOperationsInput | string
    sexe?: StringFieldUpdateOperationsInput | string
    aptitude?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    etat?: BoolFieldUpdateOperationsInput | boolean
    etablissement?: EtablissementUpdateOneRequiredWithoutCandidatsNestedInput
    notes?: NoteUpdateManyWithoutCandidatNestedInput
    Anonymat?: AnonymatUpdateOneWithoutCandidatNestedInput
    mark?: MarkUpdateOneWithoutCandidatNestedInput
  }

  export type CandidatUncheckedUpdateWithoutResultatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenoms?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieu_naissance?: StringFieldUpdateOperationsInput | string
    sexe?: StringFieldUpdateOperationsInput | string
    aptitude?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    etat?: BoolFieldUpdateOperationsInput | boolean
    etablissement_id?: IntFieldUpdateOperationsInput | number
    notes?: NoteUncheckedUpdateManyWithoutCandidatNestedInput
    Anonymat?: AnonymatUncheckedUpdateOneWithoutCandidatNestedInput
    mark?: MarkUncheckedUpdateOneWithoutCandidatNestedInput
  }

  export type CandidatCreateWithoutMarkInput = {
    prenoms: string
    nom: string
    date_naissance: Date | string
    lieu_naissance: string
    sexe?: string
    aptitude?: string
    section?: string
    option?: string
    etat?: boolean
    etablissement: EtablissementCreateNestedOneWithoutCandidatsInput
    notes?: NoteCreateNestedManyWithoutCandidatInput
    resultats?: ResultatCreateNestedManyWithoutCandidatInput
    Anonymat?: AnonymatCreateNestedOneWithoutCandidatInput
  }

  export type CandidatUncheckedCreateWithoutMarkInput = {
    id?: number
    prenoms: string
    nom: string
    date_naissance: Date | string
    lieu_naissance: string
    sexe?: string
    aptitude?: string
    section?: string
    option?: string
    etat?: boolean
    etablissement_id: number
    notes?: NoteUncheckedCreateNestedManyWithoutCandidatInput
    resultats?: ResultatUncheckedCreateNestedManyWithoutCandidatInput
    Anonymat?: AnonymatUncheckedCreateNestedOneWithoutCandidatInput
  }

  export type CandidatCreateOrConnectWithoutMarkInput = {
    where: CandidatWhereUniqueInput
    create: XOR<CandidatCreateWithoutMarkInput, CandidatUncheckedCreateWithoutMarkInput>
  }

  export type CandidatUpsertWithoutMarkInput = {
    update: XOR<CandidatUpdateWithoutMarkInput, CandidatUncheckedUpdateWithoutMarkInput>
    create: XOR<CandidatCreateWithoutMarkInput, CandidatUncheckedCreateWithoutMarkInput>
    where?: CandidatWhereInput
  }

  export type CandidatUpdateToOneWithWhereWithoutMarkInput = {
    where?: CandidatWhereInput
    data: XOR<CandidatUpdateWithoutMarkInput, CandidatUncheckedUpdateWithoutMarkInput>
  }

  export type CandidatUpdateWithoutMarkInput = {
    prenoms?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieu_naissance?: StringFieldUpdateOperationsInput | string
    sexe?: StringFieldUpdateOperationsInput | string
    aptitude?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    etat?: BoolFieldUpdateOperationsInput | boolean
    etablissement?: EtablissementUpdateOneRequiredWithoutCandidatsNestedInput
    notes?: NoteUpdateManyWithoutCandidatNestedInput
    resultats?: ResultatUpdateManyWithoutCandidatNestedInput
    Anonymat?: AnonymatUpdateOneWithoutCandidatNestedInput
  }

  export type CandidatUncheckedUpdateWithoutMarkInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenoms?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieu_naissance?: StringFieldUpdateOperationsInput | string
    sexe?: StringFieldUpdateOperationsInput | string
    aptitude?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    etat?: BoolFieldUpdateOperationsInput | boolean
    etablissement_id?: IntFieldUpdateOperationsInput | number
    notes?: NoteUncheckedUpdateManyWithoutCandidatNestedInput
    resultats?: ResultatUncheckedUpdateManyWithoutCandidatNestedInput
    Anonymat?: AnonymatUncheckedUpdateOneWithoutCandidatNestedInput
  }

  export type NoteCreateManyCandidatInput = {
    id?: number
    matiere_id: number
    score?: number
    groupe_id: number
  }

  export type ResultatCreateManyCandidatInput = {
    id?: number
    total?: number | null
    moyenne?: number | null
    rang?: number | null
  }

  export type NoteUpdateWithoutCandidatInput = {
    score?: FloatFieldUpdateOperationsInput | number
    groupe_id?: IntFieldUpdateOperationsInput | number
    matiere?: MatiereUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateWithoutCandidatInput = {
    id?: IntFieldUpdateOperationsInput | number
    matiere_id?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    groupe_id?: IntFieldUpdateOperationsInput | number
  }

  export type NoteUncheckedUpdateManyWithoutCandidatInput = {
    id?: IntFieldUpdateOperationsInput | number
    matiere_id?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    groupe_id?: IntFieldUpdateOperationsInput | number
  }

  export type ResultatUpdateWithoutCandidatInput = {
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    moyenne?: NullableFloatFieldUpdateOperationsInput | number | null
    rang?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ResultatUncheckedUpdateWithoutCandidatInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    moyenne?: NullableFloatFieldUpdateOperationsInput | number | null
    rang?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ResultatUncheckedUpdateManyWithoutCandidatInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    moyenne?: NullableFloatFieldUpdateOperationsInput | number | null
    rang?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CentreCreateManyZoneInput = {
    id?: number
    name?: string | null
    slug?: string | null
    contact?: string | null
  }

  export type EtablissementCreateManyZoneInput = {
    id?: number
    name: string
    slug: string
  }

  export type CentreUpdateWithoutZoneInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    jurys?: JuryUpdateManyWithoutCentreNestedInput
  }

  export type CentreUncheckedUpdateWithoutZoneInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    jurys?: JuryUncheckedUpdateManyWithoutCentreNestedInput
  }

  export type CentreUncheckedUpdateManyWithoutZoneInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EtablissementUpdateWithoutZoneInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    candidats?: CandidatUpdateManyWithoutEtablissementNestedInput
  }

  export type EtablissementUncheckedUpdateWithoutZoneInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    candidats?: CandidatUncheckedUpdateManyWithoutEtablissementNestedInput
  }

  export type EtablissementUncheckedUpdateManyWithoutZoneInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type JuryCreateManyCentreInput = {
    id?: number
    numero: number
    president?: string | null
  }

  export type JuryUpdateWithoutCentreInput = {
    numero?: IntFieldUpdateOperationsInput | number
    president?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JuryUncheckedUpdateWithoutCentreInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    president?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JuryUncheckedUpdateManyWithoutCentreInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    president?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CandidatCreateManyEtablissementInput = {
    id?: number
    prenoms: string
    nom: string
    date_naissance: Date | string
    lieu_naissance: string
    sexe?: string
    aptitude?: string
    section?: string
    option?: string
    etat?: boolean
  }

  export type CandidatUpdateWithoutEtablissementInput = {
    prenoms?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieu_naissance?: StringFieldUpdateOperationsInput | string
    sexe?: StringFieldUpdateOperationsInput | string
    aptitude?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    etat?: BoolFieldUpdateOperationsInput | boolean
    notes?: NoteUpdateManyWithoutCandidatNestedInput
    resultats?: ResultatUpdateManyWithoutCandidatNestedInput
    Anonymat?: AnonymatUpdateOneWithoutCandidatNestedInput
    mark?: MarkUpdateOneWithoutCandidatNestedInput
  }

  export type CandidatUncheckedUpdateWithoutEtablissementInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenoms?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieu_naissance?: StringFieldUpdateOperationsInput | string
    sexe?: StringFieldUpdateOperationsInput | string
    aptitude?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    etat?: BoolFieldUpdateOperationsInput | boolean
    notes?: NoteUncheckedUpdateManyWithoutCandidatNestedInput
    resultats?: ResultatUncheckedUpdateManyWithoutCandidatNestedInput
    Anonymat?: AnonymatUncheckedUpdateOneWithoutCandidatNestedInput
    mark?: MarkUncheckedUpdateOneWithoutCandidatNestedInput
  }

  export type CandidatUncheckedUpdateManyWithoutEtablissementInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenoms?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieu_naissance?: StringFieldUpdateOperationsInput | string
    sexe?: StringFieldUpdateOperationsInput | string
    aptitude?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    etat?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NoteCreateManyMatiereInput = {
    id?: number
    candidat_id: number
    score?: number
    groupe_id: number
  }

  export type NoteUpdateWithoutMatiereInput = {
    score?: FloatFieldUpdateOperationsInput | number
    groupe_id?: IntFieldUpdateOperationsInput | number
    candidat?: CandidatUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateWithoutMatiereInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidat_id?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    groupe_id?: IntFieldUpdateOperationsInput | number
  }

  export type NoteUncheckedUpdateManyWithoutMatiereInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidat_id?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    groupe_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}