// https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TlsProviderConfig {
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs#alias TlsProvider#alias}
  */
  readonly alias?: string;
  /**
  * proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs#proxy TlsProvider#proxy}
  */
  readonly proxy?: TlsProviderProxy[] | cdktf.IResolvable;
}
export interface TlsProviderProxy {
  /**
  * When `true` the provider will discover the proxy configuration from environment variables. This is based upon [`http.ProxyFromEnvironment`](https://pkg.go.dev/net/http#ProxyFromEnvironment) and it supports the same environment variables (default: `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs#from_env TlsProvider#from_env}
  */
  readonly fromEnv?: boolean | cdktf.IResolvable;
  /**
  * Password used for Basic authentication against the Proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs#password TlsProvider#password}
  */
  readonly password?: string;
  /**
  * URL used to connect to the Proxy. Accepted schemes are: `http`, `https`, `socks5`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs#url TlsProvider#url}
  */
  readonly url?: string;
  /**
  * Username (or Token) used for Basic authentication against the Proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs#username TlsProvider#username}
  */
  readonly username?: string;
}

export function tlsProviderProxyToTerraform(struct?: TlsProviderProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_env: cdktf.booleanToTerraform(struct!.fromEnv),
    password: cdktf.stringToTerraform(struct!.password),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function tlsProviderProxyToHclTerraform(struct?: TlsProviderProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_env: {
      value: cdktf.booleanToHclTerraform(struct!.fromEnv),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs tls}
*/
export class TlsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TlsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TlsProvider to import
  * @param importFromId The id of the existing TlsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TlsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs tls} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TlsProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TlsProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tls',
      terraformGeneratorMetadata: {
        providerName: 'tls',
        providerVersion: '4.1.0',
        providerVersionConstraint: '~> 4.0'
      },
      terraformProviderSource: 'hashicorp/tls'
    });
    this._alias = config.alias;
    this._proxy = config.proxy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: TlsProviderProxy[] | cdktf.IResolvable; 
  public get proxy() {
    return this._proxy;
  }
  public set proxy(value: TlsProviderProxy[] | cdktf.IResolvable | undefined) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      proxy: cdktf.listMapper(tlsProviderProxyToTerraform, true)(this._proxy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy: {
        value: cdktf.listMapperHcl(tlsProviderProxyToHclTerraform, true)(this._proxy),
        isBlock: true,
        type: "list",
        storageClassType: "TlsProviderProxyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
